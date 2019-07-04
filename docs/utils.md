# Utilities
  * [Colors](#colors)
  * [Type](#type)
  * [Radii](#Border%20Radii)
  * [Shadows](#shadows)
  * [Media](#media)

## Colors
  Each color has at least three variations: base, light and dark.
  
  **Colors:**
  * Primary
  * Secondary
  * Success
  * Warning
  * Failure
  * Grey
  * White

  **Classes:** `.cb-u-color--<color-name>(-variation)(-text)`
```html
<!-- Primary (Example) -->
<div class="cb-u-color--primary">
<div class="cb-u-color--primary-text">
<div class="cb-u-color--primary-light">
<div class="cb-u-color--primary-light-text">
<div class="cb-u-color--primary-dark">
<div class="cb-u-color--primary-dark-text>
```

## Type
The type scale consists of seven sizes of text. The h1 is the second largest size, h2 is third and so on. In addition, there are classes for all seven text sizes.
  1. Ridiculously large
  2. Section Titles
  3. Heading
  4. Sub-heading 1
  5. Sub-heading 2
  6. Standard
  7. Secondary/helper text

  **Classes:** `.cb-u-text--<0-6>`

## Border Radii
  Don't overuse.
  **Classes:** `.cb-u-radius--<sm/md/lg/ellipse>`

## Shadows
  *Text from https://medium.com/free-code-camp/how-to-construct-a-design-system-864adbf2a117*
  1. (sm) A subtle shadow to raise interactive components and add affordance.
  2. (md) A more pronounced shadow for a hover effect on components.
  3. (lg) A strong shadow to give perspective to dropdowns/popovers and other similar components.
  4. (xl) A distant shadow for modal components.

  **Classes:** `.cb-u-shadow--<sm/md/lg/xl>`

## Media

### Markup
```html
<figure class="cb-u-media--img">
    <img src="https://unsplash.it/300/400" alt="Image">
</figure>
```

### Shapes
  **Square image:** `.cb-u-media--img-square`
  **Rectangular image:** `.cb-u-media--img`
  **Round image:** Put an ellipse class on the `<img/>`

### Options

#### Caption
```html
<figure ... >
  ...
  <figcaption>
    <!--Your text here-->
  </figcaption>
</figure>
```

#### Icon
```html
<figure ... >
  ...
  <figcaption class="cb-u-media--icon-img">
    <!--Your icon here-->
  </figcaption>
</figure>
  ```