# CarpTravel - Next.js & Tailwind Webpage

## Description

This is a template of a Ukrainian tourist website. The layout and functionality of the page is semantic and valid, with special focus on accessibility (a11y, aria-labels, tab indices, keyboard controls etc.). The layout is adaptive and cross-browser - mobile from 320px, tablet from 768px, desktop from 1280pxFrom 320 to 480 the layout is rubber (responsive). Mobile-First approach was applied.

## Structure

The webpage is comprised of:

### Header:

With logo and navigation menu. When you click on the corresponding item, a smooth scroll to the corresponding section occurs. For smooth navigation through sections, react-scroll library was used.

### Hero

When you click on Join Now, there is a smooth scrolling to the Contacts section.

![Hero Section](https://i.imgur.com/wNQxkOn.jpg)

### About

With various information layouts for different device types.

### Services

Contains a slider based on Swiper React with different background images. Each image is changed with a fade effect. The active menu item is stylistically highlighted, and the appropriate call-to-action text is added.

### Career

Provides a form with form validation using react-hook-form and Tailwind CSS to style validation errors.

### Gallery

Contains an infinite slider. You can change the slide by clicking on the appropriate buttons or by dragging. Moreover, keyboard control was added to improve accessibility.

### Contacts

Provides another form with form validation using react-hook-form and Tailwind CSS to style validation errors.

## Technologies

The project is based on Next.js 13 (App Router) with TypeScript as the programming language. Tailwind CSS is used for styling and Swiper React for sliders. Form validation is done via React Hook Form.

## Complete List of Used Technologies and Libraries:

Next.js 13 (App Router)
React
React Hook Form
Typescript
Tailwind CSS
CSS
Swiper React
react-responsive
