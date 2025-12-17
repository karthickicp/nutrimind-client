import React, { useState, useMemo, useRef, useEffect } from "react";

import { X, ChevronDown, Plus } from "lucide-react";

type OptionType = string | number | Record<string, any>;

interface SelectProps {
  title?: string;
  placeholder?: string;
  value?: OptionType | OptionType[] | null;
  errorText?: string;
  isMulti?: boolean;
  isDisabled?: boolean;
  onSelect?: (value: OptionType | OptionType[] | null) => void;
  renderCustomSelect?: React.ReactNode;
  getOptionLabel?: (option: OptionType) => string;
  getOptionValue?: (option: OptionType) => string | number;
  options?: OptionType[];
  isSearchable?: boolean;
  isRequired?: boolean;
  createLabel?: string;
  isCreate?: boolean;
  onCreateOption?: (newValue: string) => void;
  optionPlacement?: "top" | "bottom" | "left" | "right";
}

const Select: React.FC<SelectProps> = ({
  title,
  placeholder = "Select...",
  value,
  errorText,
  isMulti = false,
  isDisabled = false,
  onSelect,
  renderCustomSelect,
  getOptionLabel = (opt) =>
    typeof opt === "object" ? opt?.label || "" : String(opt),
  getOptionValue = (opt) =>
    typeof opt === "object" ? opt?.value || "" : String(opt),
  options = [],
  isSearchable = false,
  isRequired = false,
  createLabel = "Create",
  isCreate = false,
  onCreateOption,
  optionPlacement = "bottom",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    if (!isDisabled) setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const filteredOptions = useMemo(() => {
    if (!isSearchable || !search) return options;
    return options.filter((opt) =>
      getOptionLabel(opt).toLowerCase().includes(search.toLowerCase())
    );
  }, [options, search, isSearchable, getOptionLabel]);

  const handleSelectOption = (opt: OptionType) => {
    if (isMulti) {
      const current = Array.isArray(value) ? [...value] : [];
      const exists = current.some(
        (v) => getOptionValue(v) === getOptionValue(opt)
      );
      const newValue = exists
        ? current.filter((v) => getOptionValue(v) !== getOptionValue(opt))
        : [...current, opt];
      onSelect?.(newValue);
    } else {
      onSelect?.(opt);
      handleClose();
    }
  };

  const handleRemoveChip = (opt: OptionType, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMulti && Array.isArray(value)) {
      const newValue = value.filter(
        (v) => getOptionValue(v) !== getOptionValue(opt)
      );
      onSelect?.(newValue);
    }
  };

  const handleCreate = () => {
    if (search && onCreateOption) {
      onCreateOption(search);
      setSearch("");
    }
  };

  const getDropdownPosition = (): string => {
    const positions: Record<string, string> = {
      bottom: "top-full mt-1",
      top: "bottom-full mb-1",
      left: "right-full mr-1 top-0",
      right: "left-full ml-1 top-0",
    };
    return positions[optionPlacement] || positions.bottom;
  };

  return (
    <div className={`w-full  my-2 ${isDisabled ? "opacity-50" : ""}`}>
      {title && (
        <label
          className={`block mb-1 text-sm font-medium ${
            errorText ? "text-red-600" : "text-white"
          }`}
        >
          {title}
          {isRequired && <span className="text-red-600"> *</span>}
        </label>
      )}

      <div className="relative">
        <div
          ref={selectRef}
          onClick={handleOpen}
          className={`border min-h-[60px] rounded-xl px-3 py-2.5 flex items-center justify-between transition-colors ${
            errorText
              ? "border-red-600"
              : "border-gray-400 hover:border-blue-600"
          } ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          {renderCustomSelect ? (
            renderCustomSelect
          ) : (
            <span className={value ? "text-white" : "text-gray-500"}>
              {isMulti
                ? Array.isArray(value) && value.length > 0
                  ? `${value.length} selected`
                  : placeholder
                : value
                  ? getOptionLabel(value)
                  : placeholder}
            </span>
          )}
          <ChevronDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            } ${isDisabled ? "text-gray-400" : ""}`}
            size={20}
          />
        </div>

        {isMulti && Array.isArray(value) && value.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {value.map((opt) => (
              <span
                key={getOptionValue(opt)}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm"
              >
                {getOptionLabel(opt)}
                <button
                  onClick={(e) => handleRemoveChip(opt, e)}
                  className="hover:bg-gray-300 rounded-full p-0.5"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}

        {isOpen && (
          <div
            ref={dropdownRef}
            className={`absolute ${getDropdownPosition()} left-0 right-0 bg-white border border-gray-300 rounded shadow-lg max-h-72 overflow-y-auto z-50`}
          >
            <div className="p-2">
              {isSearchable && (
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}

              {filteredOptions.map((opt) => {
                const label = getOptionLabel(opt);
                const valueKey = getOptionValue(opt);
                const selected = !!(isMulti
                  ? Array.isArray(value) &&
                    value.some((v) => getOptionValue(v) === valueKey)
                  : value && getOptionValue(value) === valueKey);
                return (
                  <div
                    key={valueKey}
                    onClick={() => handleSelectOption(opt)}
                    className={`px-3 py-2 my-1 text-gray-900 rounded cursor-pointer transition-colors ${
                      selected
                        ? "bg-blue-100 text-blue-900"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {label}
                  </div>
                );
              })}

              {isCreate && search && (
                <div
                  onClick={handleCreate}
                  className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                >
                  <Plus size={16} /> {createLabel}: {search}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {errorText && (
        <p className="text-red-600 text-sm mt-1 ml-0">{errorText}</p>
      )}
    </div>
  );
};

export default Select;
