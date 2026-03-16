"use client";

import { useState } from "react";
import type { OnboardingData } from "../../actions/onboarding";

interface Props {
  data: OnboardingData;
  onChange: (updates: Partial<OnboardingData>) => void;
}

function TagInput({
  label,
  description,
  placeholder,
  values,
  onChange,
}: {
  label: string;
  description?: string;
  placeholder: string;
  values: string[];
  onChange: (values: string[]) => void;
}) {
  const [input, setInput] = useState("");

  function addTag() {
    const trimmed = input.trim();
    if (trimmed && !values.includes(trimmed)) {
      onChange([...values, trimmed]);
    }
    setInput("");
  }

  function removeTag(tag: string) {
    onChange(values.filter((v) => v !== tag));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-navy-900">{label}</label>
      {description && <p className="text-xs text-navy-400">{description}</p>}

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex h-9 flex-1 rounded-md border border-navy-200 bg-white px-3 py-1.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
        />
        <button
          type="button"
          onClick={addTag}
          className="rounded-md bg-navy-100 px-3 py-1.5 text-sm font-medium text-navy-700 hover:bg-navy-200 transition-colors"
        >
          Add
        </button>
      </div>

      {values.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {values.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-800"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="text-teal-600 hover:text-teal-900"
                aria-label={`Remove ${tag}`}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function StepPatterns({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-navy-900">
        Your patterns
      </h2>
      <p className="mt-1 text-sm text-navy-500">
        Understanding what works for you helps us and the community support you better.
        Type each item and press Enter or click Add.
      </p>

      <div className="mt-6 space-y-6">
        <TagInput
          label="Strengths"
          description="What are you naturally good at?"
          placeholder="e.g. pattern recognition, deep focus"
          values={data.strengths}
          onChange={(strengths) => onChange({ strengths })}
        />

        <TagInput
          label="Challenges"
          description="What do you find harder?"
          placeholder="e.g. time management, transitions"
          values={data.challenges}
          onChange={(challenges) => onChange({ challenges })}
        />

        <TagInput
          label="Support needs"
          description="What kind of support helps you most?"
          placeholder="e.g. body doubling, written instructions"
          values={data.supportNeeds}
          onChange={(supportNeeds) => onChange({ supportNeeds })}
        />

        <TagInput
          label="Interests"
          description="What lights you up?"
          placeholder="e.g. genetics, art, gaming, science"
          values={data.interests}
          onChange={(interests) => onChange({ interests })}
        />

        <div className="space-y-2">
          <label
            htmlFor="sensoryNotes"
            className="text-sm font-medium text-navy-900"
          >
            Sensory notes
          </label>
          <p className="text-xs text-navy-400">
            Anything the community should know about your sensory needs
          </p>
          <textarea
            id="sensoryNotes"
            value={data.sensoryNotes}
            onChange={(e) => onChange({ sensoryNotes: e.target.value })}
            placeholder="e.g. sensitive to loud sounds, need low-stimulus environments"
            rows={2}
            className="flex w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
          />
        </div>
      </div>
    </div>
  );
}
