# FormKit Custom Components

This directory contains custom FormKit input components for the Corrad UI framework.

## Components

### 1. OneTimePassword.vue
A custom OTP input component with auto-focus navigation and paste support.

**Usage:**
```vue
<FormKit
  type="otp"
  label="One-Time Password"
  help="Enter the 6-digit code"
  digits="6"
/>
```

**Props:**
- `digits` (number): Number of OTP digits (default: 6)

### 2. TextMask.vue
A text input with masking capabilities using the `v-maska` directive.

**Usage:**
```vue
<FormKit
  type="mask"
  label="Phone Number"
  mask="(##) ####-####"
  placeholder="(12) 3456-7890"
/>
```

**Props:**
- `mask` (string): Mask pattern for the input

### 3. FileDropzone.vue
An advanced file upload component with drag & drop, preview, and validation.

**Usage:**
```vue
<FormKit
  type="dropzone"
  label="Upload Files"
  help="Drag and drop files here"
  multiple="true"
  accept="image/*"
  max-size="5242880"
/>
```

**Props:**
- `accept` (string): Accepted file types
- `multiple` (boolean): Allow multiple file selection
- `maxSize` (number): Maximum file size in bytes
- `minSize` (number): Minimum file size in bytes
- `maxFiles` (number): Maximum number of files
- `disabled` (boolean): Disable the component

### 4. MultiSelect.vue ⭐ NEW
A searchable multi-select component with keyboard navigation and tag display.

**Usage:**
```vue
<FormKit
  type="multiselect"
  label="Select Countries"
  help="Choose multiple countries"
  :options="{
    us: 'United States',
    ca: 'Canada',
    uk: 'United Kingdom'
  }"
  placeholder="Search countries..."
  validation="required|min:2"
/>
```

**Props:**
- `options` (object|array|function): Available options
- `placeholder` (string): Placeholder text for search input

**Features:**
- 🔍 **Searchable**: Type to filter options
- ⌨️ **Keyboard Navigation**: Arrow keys, Enter, Escape
- 🏷️ **Tag Display**: Selected options shown as removable tags
- 📱 **Responsive**: Works on mobile and desktop
- ✅ **Validation**: Supports FormKit validation rules
- 🎨 **Themed**: Follows your design system

**Options Format:**
```javascript
// Object format
{
  value1: 'Label 1',
  value2: 'Label 2'
}

// Array of strings
['Option 1', 'Option 2', 'Option 3']

// Array of objects
[
  { value: 'val1', label: 'Label 1' },
  { value: 'val2', label: 'Label 2' }
]

// Function (for dynamic options)
function getOptions({ search }) {
  // Return options based on search query
  return filteredOptions;
}
```

**Keyboard Shortcuts:**
- `↑/↓`: Navigate options
- `Enter`: Select focused option
- `Escape`: Close dropdown
- `Backspace`: Remove last selected option (when search is empty)
- `Space/Enter`: Open dropdown (when closed)

## Registration

All components are registered in `assets/js/formkit-custom.js`:

```javascript
import { createInput } from "@formkit/vue";
import MultiSelect from "~/components/formkit/MultiSelect.vue";

export default {
  multiselect: createInput(MultiSelect, {
    props: ["options", "placeholder"],
  }),
  // ... other components
};
```

## Styling

CSS classes are defined in `assets/js/formkit-theme.js` and styled in `assets/style/css/form/multiselect.css`.

The component follows the same styling patterns as other FormKit inputs in your framework. 