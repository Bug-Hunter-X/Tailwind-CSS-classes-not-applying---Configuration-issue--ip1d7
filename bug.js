```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```html
<!-- index.html -->
<div class="bg-gray-200">
    <div class="p-4">
        <p>This text should have a gray background.</p>
    </div>
</div>
```