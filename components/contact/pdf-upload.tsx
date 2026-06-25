"use client";

import { useCallback, useRef, useState } from "react";
import { FileText, Upload, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  ALLOWED_PDF_MIME_TYPES,
  MAX_PDF_SIZE_BYTES,
  PDF_ACCEPT,
} from "@/lib/contact/constants";

type PdfUploadProps = {
  file: File | null;
  onFileChange: (file: File | null) => void;
  onValidationError?: (message: string) => void;
  disabled?: boolean;
};

function isPdfFile(file: File): boolean {
  return (
    ALLOWED_PDF_MIME_TYPES.has(file.type) ||
    file.name.toLowerCase().endsWith(".pdf")
  );
}

function validatePdfFile(file: File): string | null {
  if (!isPdfFile(file)) {
    return "Only PDF files are allowed.";
  }

  if (file.size > MAX_PDF_SIZE_BYTES) {
    return "File size must be under 10MB.";
  }

  if (file.size === 0) {
    return "The uploaded PDF file is empty.";
  }

  return null;
}

export function PdfUpload({
  file,
  onFileChange,
  onValidationError,
  disabled = false,
}: PdfUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback(
    (selectedFile: File | null) => {
      if (!selectedFile) {
        onFileChange(null);
        return;
      }

      const validationError = validatePdfFile(selectedFile);
      if (validationError) {
        onValidationError?.(validationError);
        return;
      }

      onFileChange(selectedFile);
    },
    [onFileChange, onValidationError],
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0] ?? null;
    handleFile(selectedFile);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);

    if (disabled) {
      return;
    }

    const droppedFile = event.dataTransfer.files?.[0] ?? null;
    handleFile(droppedFile);
  }

  function clearFile() {
    onFileChange(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && inputRef.current?.click()}
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === " ") && !disabled) {
          event.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "relative flex cursor-pointer items-center gap-4 rounded-lg border border-dashed px-5 py-5 transition-colors",
        "bg-[#1c1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
        isDragging
          ? "border-[#00ffff] bg-[#00ffff]/5"
          : "border-zinc-600 hover:border-zinc-400",
        disabled && "cursor-not-allowed opacity-60",
      )}
      aria-disabled={disabled}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
          file ? "bg-[#00ffff]/10" : "bg-zinc-800",
        )}
      >
        {file ? (
          <FileText className="h-5 w-5 text-[#00ffff]" strokeWidth={1.5} />
        ) : (
          <Upload className="h-5 w-5 text-zinc-400" strokeWidth={1.5} />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-normal text-white">
          {file ? "PDF attached" : "Attach a PDF (optional)"}
        </p>
        <p className="truncate text-xs text-zinc-500">
          {file
            ? file.name
            : "Drag & drop or click to browse — max 10MB"}
        </p>
      </div>

      {file ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            clearFile();
          }}
          disabled={disabled}
          className="shrink-0 text-zinc-400 transition-colors hover:text-white disabled:opacity-50"
          aria-label="Remove PDF attachment"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}

      <input
        ref={inputRef}
        type="file"
        accept={PDF_ACCEPT}
        className="sr-only"
        onChange={handleInputChange}
        disabled={disabled}
      />
    </div>
  );
}

export { validatePdfFile, isPdfFile };
