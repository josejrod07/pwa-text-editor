# Text Editor Web Application

This is a simple text editor web application that allows users to create, edit, and save text content. The application utilizes modern web technologies, including IndexedDB for local storage and service workers for offline support. It is built using webpack for bundling and workbox for caching static assets.

## Table of Contents

- [Next-gen JavaScript](#next-gen-javascript)
- [IndexedDB](#indexeddb)
- [Offline Support](#offline-support)
- [Desktop Installation](#desktop-installation)
- [License](#license)

## Next-gen JavaScript

The text editor application is built using next-gen JavaScript (ES6+), ensuring compatibility with modern web browsers. The code is transpiled using webpack, enabling support for older browsers while maintaining the latest language features.

## IndexedDB

IndexedDB is used to provide local storage functionality for the text editor. When you open the application, IndexedDB will immediately create a database to store your content. Any changes you make will be automatically saved to IndexedDB when you click off the DOM window.

## Offline Support

The application is designed to work seamlessly offline using service workers and workbox. When you load the web application, the service worker will be registered, and static assets will be pre-cached. Subsequent pages and static assets will also be cached, ensuring the text editor remains functional even when there is no internet connection.

## Desktop Installation

You can install the text editor web application on your desktop for easy access. Here's how:

1. Open the [application](#) in your browser.
2. Click the "Install!" button, which will prompt you to download the application as an icon on your desktop.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

[Repository](#https://github.com/josejrod07/pwa-text-editor.git)

[Application](#)