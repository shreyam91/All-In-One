## Pagination Component

# Overview
This project implements a simple and reusable pagination component to facilitate navigation between pages of data. The component allows users to move through data efficiently, improving the user experience when dealing with large datasets by breaking the content into manageable pages.

# Features

Navigate between multiple pages of data.
Display page numbers with options to go to the first, last, next, and previous pages.
Handles dynamic page size and total number of pages.
Supports customization for different UI styles.

# Usage

Basic Example

import Pagination from './PaginationComponent';
// Sample data for pagination
const totalPages = 10;  // Total number of pages
const currentPage = 1;  // Currently displayed page

<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={(page) => console.log(`Go to page: ${page}`)} />

# Props

totalPages (number): Total number of pages.
currentPage (number): The currently selected page.
onPageChange (function): Callback function that is triggered when a page is selected. Receives the page number as an argument.

# Customization
The pagination component can be customized for different UI needs, such as modifying the layout, changing the colors, or adjusting the page size.

# License
MIT License - See LICENSE file for details.



