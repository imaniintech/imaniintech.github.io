const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')


// Adds Left Side Hover
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// Removes Left Side Hover
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))


// Adds Right Side Hover
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
// Removes Right Side Hover
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))