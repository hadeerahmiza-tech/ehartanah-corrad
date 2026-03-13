<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-[rgb(var(--text-color))]">
          Multi-Select Component
        </h1>
        <p class="text-[rgb(var(--text-color))] opacity-70">
          Searchable multi-select input component for FormKit
        </p>
      </div>
    </div>

    <div class="grid gap-6">
      <!-- Basic Multi-Select -->
      <rs-card>
        <template #header> Basic Multi-Select </template>
        <template #body>
          <FormKit
            type="multiselect"
            label="Select Countries"
            help="Choose multiple countries from the list"
            :options="{
              us: 'United States',
              ca: 'Canada',
              uk: 'United Kingdom',
              de: 'Germany',
              fr: 'France',
              jp: 'Japan',
              au: 'Australia',
              br: 'Brazil',
              in: 'India',
              cn: 'China'
            }"
            placeholder="Search countries..."
          />
        </template>
      </rs-card>

      <!-- Array of Objects Multi-Select -->
      <rs-card>
        <template #header> Array of Objects </template>
        <template #body>
          <FormKit
            type="multiselect"
            label="Select Technologies"
            help="Choose your preferred technologies"
            :options="[
              { value: 'vue', label: 'Vue.js' },
              { value: 'react', label: 'React' },
              { value: 'angular', label: 'Angular' },
              { value: 'nuxt', label: 'Nuxt.js' },
              { value: 'next', label: 'Next.js' },
              { value: 'svelte', label: 'Svelte' },
              { value: 'solid', label: 'Solid.js' },
              { value: 'alpine', label: 'Alpine.js' }
            ]"
            placeholder="Search technologies..."
          />
        </template>
      </rs-card>

      <!-- Array of Strings Multi-Select -->
      <rs-card>
        <template #header> Array of Strings </template>
        <template #body>
          <FormKit
            type="multiselect"
            label="Select Colors"
            help="Choose your favorite colors"
            :options="[
              'Red',
              'Blue',
              'Green',
              'Yellow',
              'Purple',
              'Orange',
              'Pink',
              'Brown',
              'Black',
              'White'
            ]"
            placeholder="Search colors..."
          />
        </template>
      </rs-card>

      <!-- Dynamic Options Multi-Select -->
      <rs-card>
        <template #header> Dynamic Options </template>
        <template #body>
          <FormKit
            type="multiselect"
            label="Select Users"
            help="Search and select users dynamically"
            :options="getUsers"
            placeholder="Search users..."
          />
        </template>
      </rs-card>

      <!-- With Validation -->
      <rs-card>
        <template #header> With Validation </template>
        <template #body>
          <FormKit
            type="multiselect"
            label="Required Selection"
            help="You must select at least 2 items"
            :options="{
              item1: 'Item 1',
              item2: 'Item 2',
              item3: 'Item 3',
              item4: 'Item 4',
              item5: 'Item 5'
            }"
            placeholder="Select at least 2 items..."
            validation="required|min:2"
            validation-label="Selection"
          />
        </template>
      </rs-card>

      <!-- Pre-selected Values -->
      <rs-card>
        <template #header> Pre-selected Values </template>
        <template #body>
          <FormKit
            type="multiselect"
            label="Pre-selected Options"
            help="Some options are already selected"
            :options="{
              apple: 'Apple',
              banana: 'Banana',
              orange: 'Orange',
              grape: 'Grape',
              strawberry: 'Strawberry',
              blueberry: 'Blueberry',
              raspberry: 'Raspberry',
              blackberry: 'Blackberry'
            }"
            :value="[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' }
            ]"
            placeholder="Search fruits..."
          />
        </template>
      </rs-card>

      <!-- Form Example -->
      <rs-card>
        <template #header> Complete Form Example </template>
        <template #body>
          <FormKit
            type="form"
            @submit="handleSubmit"
            submit-label="Submit Form"
          >
            <FormKit
              type="text"
              name="name"
              label="Full Name"
              validation="required"
            />
            
            <FormKit
              type="multiselect"
              name="interests"
              label="Interests"
              help="Select your areas of interest"
              :options="{
                technology: 'Technology',
                sports: 'Sports',
                music: 'Music',
                art: 'Art',
                science: 'Science',
                travel: 'Travel',
                cooking: 'Cooking',
                reading: 'Reading',
                gaming: 'Gaming',
                photography: 'Photography'
              }"
              placeholder="Search interests..."
              validation="required|min:1"
            />

            <FormKit
              type="email"
              name="email"
              label="Email Address"
              validation="required|email"
            />
          </FormKit>
        </template>
      </rs-card>
    </div>
  </div>
</template>

<script setup>
// Mock function for dynamic options
function getUsers({ search }) {
  // Simulate API call with search
  const users = [
    { value: 'john', label: 'John Doe' },
    { value: 'jane', label: 'Jane Smith' },
    { value: 'bob', label: 'Bob Johnson' },
    { value: 'alice', label: 'Alice Brown' },
    { value: 'charlie', label: 'Charlie Wilson' },
    { value: 'diana', label: 'Diana Davis' },
    { value: 'edward', label: 'Edward Miller' },
    { value: 'fiona', label: 'Fiona Garcia' }
  ];

  if (search) {
    return users.filter(user => 
      user.label.toLowerCase().includes(search.toLowerCase())
    );
  }

  return users;
}

function handleSubmit(formData) {
  console.log('Form submitted:', formData);
  alert('Form submitted! Check console for data.');
}
</script> 