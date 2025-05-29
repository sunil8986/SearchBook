import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <span class="copyright">©2023 <a class="hover:underline" href="/">Book Store</a>. All Rights Reserved.</span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer" class="">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" class="">LinkedIn</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer" class="">Twitter</a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noreferrer" class="">YouTube</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer