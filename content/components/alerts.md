---
title: Alerts
path: components/alerts
status: Stable
source: 'https://github.com/primer/css/tree/master/src/alerts'
bundle: alerts
---

Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Default

Flash messages start off looking decently neutral—they're just light blue rounded rectangles.

```html live
<div class="flash">
  Flash message goes here.
</div>
```

You can put multiple paragraphs of text in a flash message—the last paragraph's bottom `margin` will be automatically override.

```html live
<div class="flash">
  <p>
    This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more
    text, it'll eventually wrap to a new line.
  </p>
  <p>And this is another paragraph.</p>
</div>
```

Should the need arise, you can quickly space out your flash message from surrounding content with a `.flash-messages` wrapper. _Note the extra top and bottom margin in the example below._

```html live
<div class="flash-messages">
  <div class="flash">
    Flash message goes here.
  </div>
</div>
```

## Colors

Add `.flash-warn`, `.flash-error`, or `.flash-success` to the flash message to make it yellow, red, or green, respectively.

```html live
<div class="flash">
  Flash message goes here.
</div>

<div class="flash mt-3 flash-warn">
  Flash message goes here.
</div>

<div class="flash mt-3 flash-error">
  Flash message goes here.
</div>

<div class="flash mt-3 flash-success">
  Flash message goes here.
</div>
```

## With icon

Add an icon to the left of the flash message to give it some funky fresh attention.

```html live
<div class="flash">
  <!-- <%= octicon "rocket" %> -->
  <svg class="octicon octicon-rocket" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.064 0C11.7434 9.77766e-05 9.51786 0.922034 7.87699 2.563L7.41799 3.021C7.10399 3.335 6.80199 3.662 6.51399 4H3.30999C3.01117 4.00009 2.71736 4.07669 2.45653 4.2225C2.19571 4.36832 1.97657 4.57849 1.81999 4.833L0.10999 7.607C0.0499638 7.7045 0.0130574 7.81445 0.00209983 7.92842C-0.00885773 8.04239 0.00642442 8.15736 0.0467749 8.26451C0.0871255 8.37166 0.151473 8.46815 0.234886 8.54658C0.318298 8.62502 0.418561 8.68331 0.52799 8.717L3.62999 9.671C3.66699 9.722 3.70899 9.771 3.75399 9.816L6.18299 12.244C6.22899 12.29 6.27699 12.332 6.32799 12.369L7.28199 15.471C7.31568 15.5804 7.37397 15.6807 7.45241 15.7641C7.53084 15.8475 7.62733 15.9119 7.73448 15.9522C7.84163 15.9926 7.9566 16.0078 8.07057 15.9969C8.18454 15.9859 8.29449 15.949 8.39199 15.889L11.166 14.182C11.4205 14.0254 11.6307 13.8063 11.7765 13.5455C11.9223 13.2846 11.9989 12.9908 11.999 12.692V9.485C12.337 9.197 12.664 8.895 12.978 8.581L13.436 8.122C15.0771 6.48154 15.9994 4.2564 16 1.936V1.75C16 1.28587 15.8156 0.840752 15.4874 0.512563C15.1592 0.184374 14.7141 0 14.25 0H14.064ZM10.5 10.625C10.412 10.685 10.323 10.743 10.234 10.8L7.88399 12.321L8.43199 14.104L10.381 12.904C10.4174 12.8816 10.4474 12.8503 10.4682 12.813C10.4891 12.7757 10.5 12.7337 10.5 12.691V10.625ZM3.67799 8.116L5.19999 5.766C5.25799 5.676 5.31699 5.588 5.37599 5.5H3.30899C3.26628 5.49999 3.22427 5.51092 3.18699 5.53175C3.1497 5.55258 3.11837 5.58262 3.09599 5.619L1.89599 7.569L3.67799 8.116ZM8.93799 3.623C10.2973 2.26391 12.1408 1.50028 14.063 1.5H14.249C14.3153 1.5 14.3789 1.52634 14.4258 1.57322C14.4727 1.62011 14.499 1.6837 14.499 1.75V1.936C14.4991 2.88813 14.3117 3.83096 13.9474 4.71066C13.5832 5.59035 13.0492 6.38968 12.376 7.063L11.917 7.521C11.157 8.281 10.32 8.958 9.41799 9.541L7.10099 11.041L4.95799 8.898L6.45799 6.581C7.04138 5.67884 7.71847 4.84085 8.47799 4.081L8.93599 3.623H8.93799ZM12 5C12 5.26522 11.8946 5.51957 11.7071 5.70711C11.5196 5.89464 11.2652 6 11 6C10.7348 6 10.4804 5.89464 10.2929 5.70711C10.1053 5.51957 9.99999 5.26522 9.99999 5C9.99999 4.73478 10.1053 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4C11.2652 4 11.5196 4.10536 11.7071 4.29289C11.8946 4.48043 12 4.73478 12 5ZM3.55999 14.56C3.70736 14.4227 3.82557 14.2571 3.90755 14.0731C3.98954 13.8891 4.03362 13.6905 4.03717 13.489C4.04073 13.2876 4.00368 13.0876 3.92824 12.9008C3.85279 12.714 3.7405 12.5444 3.59807 12.4019C3.45563 12.2595 3.28596 12.1472 3.09919 12.0718C2.91241 11.9963 2.71235 11.9593 2.51095 11.9628C2.30954 11.9664 2.11091 12.0105 1.92691 12.0924C1.74292 12.1744 1.57731 12.2926 1.43999 12.44C0.70599 13.17 0.39299 14.772 0.28999 15.443C0.2839 15.4792 0.286547 15.5163 0.29771 15.5512C0.308873 15.5861 0.328229 15.6179 0.354162 15.6438C0.380096 15.6698 0.411855 15.6891 0.44679 15.7003C0.481726 15.7114 0.518824 15.7141 0.55499 15.708C1.22599 15.605 2.82799 15.292 3.55999 14.56Z"></path></svg>
  Flash message with an icon
</div>

<div class="flash mt-3 flash-warn">
  <!-- <%= octicon "shield-lock" %> -->
  <svg class="octicon octicon-shield-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53336 0.133063C8.18645 0.0220524 7.81355 0.0220518 7.46664 0.133062L2.21664 1.81306C1.49183 2.045 1 2.71878 1 3.4798V6.99985C1 8.5659 1.31923 10.1823 2.3032 11.682C3.28631 13.1805 4.88836 14.4946 7.33508 15.5367C7.75909 15.7173 8.24091 15.7173 8.66493 15.5367C11.1116 14.4946 12.7137 13.1805 13.6968 11.682C14.6808 10.1823 15 8.5659 15 6.99985V3.4798C15 2.71878 14.5082 2.045 13.7834 1.81306L8.53336 0.133063ZM7.92381 1.5617C7.97336 1.54584 8.02664 1.54584 8.07619 1.5617L13.3262 3.2417C13.4297 3.27483 13.5 3.37109 13.5 3.4798V6.99985C13.5 8.35818 13.2253 9.66618 12.4426 10.8592C11.6591 12.0535 10.3216 13.2007 8.07713 14.1567C8.02866 14.1773 7.97134 14.1773 7.92287 14.1567C5.67838 13.2007 4.34094 12.0535 3.55737 10.8592C2.77465 9.66618 2.5 8.35818 2.5 6.99985V3.4798C2.5 3.37109 2.57026 3.27483 2.67381 3.2417L7.92381 1.5617ZM9.5 6.49988C9.5 7.05509 9.19835 7.53985 8.75 7.7992L8.75 10.2499C8.75 10.6641 8.41421 10.9999 8 10.9999C7.58579 10.9999 7.25 10.6641 7.25 10.2499L7.25 7.7992C6.80165 7.53985 6.5 7.05509 6.5 6.49988C6.5 5.67145 7.17157 4.99988 8 4.99988C8.82843 4.99988 9.5 5.67145 9.5 6.49988Z"></path></svg>
  Flash message with an icon
</div>

<div class="flash mt-3 flash-error">
  <!-- <%= octicon "flame" %> -->
  <svg class="octicon octicon-flame" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99789 14.5001C10.8304 14.5001 12.9971 12.5193 12.9971 10C12.9971 8.53654 12.3174 7.80948 11.1193 6.61667C11.1071 6.60453 11.0949 6.59236 11.0826 6.58014C10.0696 5.57183 8.7824 4.29061 8.24911 2.14559C7.92718 2.40211 7.61813 2.72476 7.38529 3.09924C6.95273 3.79496 6.7637 4.67919 7.33879 5.82934C7.81231 6.77637 8.00841 8.11294 7.06066 9.06069C6.45006 9.67129 5.51641 9.90115 4.65812 9.69385C4.1002 9.55909 3.61121 9.25672 3.22215 8.81981C3.08407 9.16747 3.00001 9.57013 3 10.0001C2.99994 12.5298 5.1636 14.5001 7.99789 14.5001ZM9.5332 0.752514C9.49562 0.340008 9.16001 0.00931669 8.76889 0.145686C7.03463 0.750359 4.34051 3.18696 5.99715 6.50017C6.34142 7.1887 6.28164 7.71839 6 8.00003C5.58104 8.41899 4.45998 8.4869 3.95925 7.16847C3.78678 6.71435 3.30098 6.40593 2.92501 6.71353C2.03625 7.44067 1.50003 8.70216 1.5 10C1.49992 13.5121 4.49789 16.0001 7.99789 16.0001C11.4979 16.0001 14.4971 13.5 14.4971 10C14.4971 7.86282 13.3699 6.74064 12.1862 5.56222C10.9968 4.37809 9.7504 3.13717 9.5332 0.752514Z"></path></svg>
  Flash message with an icon
</div>

<div class="flash mt-3 flash-success">
  <!-- <%= octicon "shield-check" %> -->
  <svg class="octicon octicon-shield-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53336 0.133063C8.18645 0.0220524 7.81355 0.0220518 7.46664 0.133062L2.21664 1.81306C1.49183 2.045 1 2.71878 1 3.4798V6.99985C1 8.5659 1.31923 10.1823 2.3032 11.682C3.28631 13.1805 4.88836 14.4946 7.33508 15.5367C7.75909 15.7173 8.24091 15.7173 8.66493 15.5367C11.1116 14.4946 12.7137 13.1805 13.6968 11.682C14.6808 10.1823 15 8.5659 15 6.99985V3.4798C15 2.71878 14.5082 2.045 13.7834 1.81306L8.53336 0.133063ZM7.92381 1.5617C7.97336 1.54584 8.02664 1.54584 8.07619 1.5617L13.3262 3.2417C13.4297 3.27483 13.5 3.37109 13.5 3.4798V6.99985C13.5 8.35818 13.2253 9.66618 12.4426 10.8592C11.6591 12.0535 10.3216 13.2007 8.07713 14.1567C8.02866 14.1773 7.97134 14.1773 7.92287 14.1567C5.67838 13.2007 4.34094 12.0535 3.55737 10.8592C2.77465 9.66618 2.5 8.35818 2.5 6.99985V3.4798C2.5 3.37109 2.57026 3.27483 2.67381 3.2417L7.92381 1.5617ZM11.2803 6.28021C11.5732 5.98731 11.5732 5.51244 11.2803 5.21955C10.9874 4.92665 10.5126 4.92665 10.2197 5.21955L7.25 8.18922L6.28033 7.21955C5.98744 6.92665 5.51256 6.92665 5.21967 7.21955C4.92678 7.51244 4.92678 7.98731 5.21967 8.28021L6.71967 9.78021C7.01256 10.0731 7.48744 10.0731 7.78033 9.78021L11.2803 6.28021Z"></path></svg>
  Flash message with an icon
</div>
```

When using a `24px` icon, add a `.v-align-bottom` class and increase the font-size with `.f4` for a more balanced alignment.

```html live
<div class="flash flash-success f4">
  <!-- <%= octicon "shield-check" %> -->
  <svg class="octicon octicon-shield-check v-align-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9275 3.55567C11.9748 3.54134 12.0252 3.54134 12.0725 3.55567L19.3225 5.75264C19.4292 5.78497 19.5 5.88157 19.5 5.99039V11C19.5 13.4031 18.7773 15.3203 17.5164 16.847C16.246 18.3853 14.3925 19.5706 12.0703 20.4278C12.0253 20.4444 11.9746 20.4444 11.9297 20.4278C9.60747 19.5706 7.75398 18.3853 6.48358 16.847C5.2227 15.3203 4.5 13.4031 4.5 11L4.5 5.9904C4.5 5.88158 4.57082 5.78496 4.6775 5.75264L11.9275 3.55567ZM12.5075 2.12013C12.1766 2.01985 11.8234 2.01985 11.4925 2.12013L4.24249 4.3171C3.50587 4.54032 3 5.21807 3 5.9904L3 11C3 13.7306 3.83104 15.9908 5.32701 17.8022C6.81347 19.6021 8.91996 20.9157 11.4102 21.835C11.7904 21.9753 12.2095 21.9753 12.5897 21.835C15.08 20.9157 17.1865 19.6021 18.673 17.8022C20.169 15.9908 21 13.7306 21 11V5.99039C21 5.21804 20.4941 4.54031 19.7575 4.3171L12.5075 2.12013ZM16.2803 9.78033C16.5732 9.48744 16.5732 9.01256 16.2803 8.71967C15.9874 8.42678 15.5126 8.42678 15.2197 8.71967L11 12.9393L9.28033 11.2197C8.98744 10.9268 8.51256 10.9268 8.21967 11.2197C7.92678 11.5126 7.92678 11.9874 8.21967 12.2803L10.4697 14.5303C10.7626 14.8232 11.2374 14.8232 11.5303 14.5303L16.2803 9.78033Z"></path></svg>
  Flash message with a larger icon
</div>
```

## With dismiss

Add a JavaScript enabled (via Crema) dismiss (close) icon on the right of any flash message.

```html live
<div class="flash">
  Dismissable flash message goes here.
  <button class="flash-close js-flash-close" type="button" aria-label="Close">
    <!-- <%= octicon "x" %> -->
    <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
  </button>
</div>

<div class="flash mt-3 flash-warn">
  Dismissable flash message goes here.
  <button class="flash-close js-flash-close" type="button" aria-label="Close">
    <!-- <%= octicon "x" %> -->
    <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
  </button>
</div>

<div class="flash mt-3 flash-error">
  Dismissable flash message goes here.
  <button class="flash-close js-flash-close" type="button" aria-label="Close">
    <!-- <%= octicon "x" %> -->
    <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
  </button>
</div>

<div class="flash mt-3 flash-success">
  Dismissable flash message goes here.
  <button class="flash-close js-flash-close" type="button" aria-label="Close">
    <!-- <%= octicon "x" %> -->
    <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
  </button>
</div>
```

## With action button

A flash message with an action button.

```html live
<div class="flash">
  Flash message with action here.
  <button type="submit" class="btn btn-sm primary flash-action">Complete action</button>
</div>

<div class="flash mt-3 flash-warn">
  Flash message with action here.
  <button class="btn btn-sm primary flash-action" type="submit">Complete action</button>
</div>

<div class="flash mt-3 flash-error">
  Flash message with action here.
  <button class="btn btn-sm primary flash-action" type="submit">Complete action</button>
</div>

<div class="flash mt-3 flash-success">
  Flash message with action here.
  <button class="btn btn-sm primary flash-action" type="submit">Complete action</button>
</div>
```

## Full width flash

A flash message that is full width and removes border and border radius.

```html live
<div class="flash flash-full">
  Full width flash message.
</div>
```

## Flash banner

A flash message that is fixed positioned at the top of the page. Use for more global events where the content of the page is unknown.

```html live
<div class="ml-n3" style="min-height: 50px;">
  <div class="flash flash-banner">
    Flash banner message.
  </div>
</div>
```