

# There is a deviation from other project structions

```
src
  absolute: non-reusable, expected to show on absolute position from screen
  components: reusable components such as buttons, alerts, and text boxes
  panels: non-reusable, but designed to fit in tight spaces
  views: non-reusable, designed to fit the whole screen
  util: global utility functions
  store: app state
```
these are the variables

```css
:root {
  --bg-color: #eeebe2;
  --main-color: #080909;
  --caret-color: #7fa480;
  --sub-color: #99947f;
  --text-color: #080909;
  --error-color: #c87e74;
  --colorful-error-color: #a56961;
  --colorful-error-color: #c87e74;
  --colorful-error-extra-color: #a56961;
}
```

they are in `style.scss`

please do not use `scoped` unless you have a really good reason to
