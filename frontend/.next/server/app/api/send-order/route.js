"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send-order/route";
exports.ids = ["app/api/send-order/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-order%2Froute&page=%2Fapi%2Fsend-order%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-order%2Froute.js&appDir=%2FUsers%2Fmacbook%2FWork%2Fsiren-store%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacbook%2FWork%2Fsiren-store%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-order%2Froute&page=%2Fapi%2Fsend-order%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-order%2Froute.js&appDir=%2FUsers%2Fmacbook%2FWork%2Fsiren-store%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacbook%2FWork%2Fsiren-store%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_macbook_Work_siren_store_frontend_src_app_api_send_order_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/send-order/route.js */ \"(rsc)/./src/app/api/send-order/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/send-order/route\",\n        pathname: \"/api/send-order\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-order/route\"\n    },\n    resolvedPagePath: \"/Users/macbook/Work/siren-store/frontend/src/app/api/send-order/route.js\",\n    nextConfigOutput,\n    userland: _Users_macbook_Work_siren_store_frontend_src_app_api_send_order_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send-order/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLW9yZGVyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLW9yZGVyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1vcmRlciUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hY2Jvb2slMkZXb3JrJTJGc2lyZW4tc3RvcmUlMkZmcm9udGVuZCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZtYWNib29rJTJGV29yayUyRnNpcmVuLXN0b3JlJTJGZnJvbnRlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDc0Q7QUFDdkM7QUFDc0M7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lyZW4tc3RvcmUvPzdjYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbmltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tYWNib29rL1dvcmsvc2lyZW4tc3RvcmUvZnJvbnRlbmQvc3JjL2FwcC9hcGkvc2VuZC1vcmRlci9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VuZC1vcmRlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmQtb3JkZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlbmQtb3JkZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbWFjYm9vay9Xb3JrL3NpcmVuLXN0b3JlL2Zyb250ZW5kL3NyYy9hcHAvYXBpL3NlbmQtb3JkZXIvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2VuZC1vcmRlci9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-order%2Froute&page=%2Fapi%2Fsend-order%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-order%2Froute.js&appDir=%2FUsers%2Fmacbook%2FWork%2Fsiren-store%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacbook%2FWork%2Fsiren-store%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/send-order/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/send-order/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\nasync function POST(req) {\n    try {\n        const { cartItems, totalAmount, customer } = await req.json();\n        // Настройка SMTP\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n            host: \"smtp.gmail.com\",\n            port: 587,\n            secure: false,\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASSWORD\n            }\n        });\n        // Формирование текста письма\n        const emailContent = `\n          <h1>Новый заказ</h1>\n          <p><strong>Имя заказчика:</strong> ${customer.name}</p>\n          <p><strong>Почта заказчика:</strong> ${customer.email}</p>\n          <p><strong>Номер телефона заказчика:</strong> ${customer.phone || \"Не указан\"}</p>\n          <h2>Детали заказа:</h2>\n          <ul>\n            ${cartItems.map((item)=>`\n              <li>\n                <p><strong>Товар:</strong> ${item.name}</p>\n                <p><strong>Количество:</strong> ${item.quantity}</p>\n                <p><strong>Размер:</strong> ${item.size}</p>\n                <p><strong>Цена:</strong> ${item.price} грн</p>\n              </li>\n            `).join(\"\")}\n          </ul>\n          <p><strong>Общая сумма:</strong> ${totalAmount} грн</p>\n          <p><strong>Адрес доставки:</strong> ${customer.address}</p>\n        `;\n        // Отправка письма\n        await transporter.sendMail({\n            from: '\"Siren Store\" <siren.serena.official@gmail.com>',\n            to: \"siren.serena.official@gmail.com\",\n            subject: \"Новый заказ\",\n            html: emailContent\n        });\n        return new Response(JSON.stringify({\n            message: \"Order sent successfully\"\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error sending order email:\", error);\n        return new Response(JSON.stringify({\n            message: \"Error sending order email\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW5kLW9yZGVyL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBRTdCLGVBQWVDLEtBQUtDLEdBQUc7SUFDMUIsSUFBSTtRQUNBLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1ILElBQUlJLElBQUk7UUFFM0QsaUJBQWlCO1FBQ2pCLE1BQU1DLGNBQWNQLHVEQUEwQixDQUFDO1lBQzNDUyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxNQUFNO2dCQUNGQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7Z0JBQzVCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLGNBQWM7WUFDcEM7UUFDSjtRQUVBLDZCQUE2QjtRQUM3QixNQUFNQyxlQUFlLENBQUM7OzZDQUVlLEVBQUVkLFNBQVNlLElBQUksQ0FBQzsrQ0FDZCxFQUFFZixTQUFTZ0IsS0FBSyxDQUFDO3dEQUNSLEVBQUVoQixTQUFTaUIsS0FBSyxJQUFJLFlBQVk7OztZQUc1RSxFQUFFbkIsVUFBVW9CLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUSxDQUFDOzsyQ0FFTSxFQUFFQSxLQUFLSixJQUFJLENBQUM7Z0RBQ1AsRUFBRUksS0FBS0MsUUFBUSxDQUFDOzRDQUNwQixFQUFFRCxLQUFLRSxJQUFJLENBQUM7MENBQ2QsRUFBRUYsS0FBS0csS0FBSyxDQUFDOztZQUUzQyxDQUFDLEVBQUVDLElBQUksQ0FBQyxJQUFJOzsyQ0FFbUIsRUFBRXhCLFlBQVk7OENBQ1gsRUFBRUMsU0FBU3dCLE9BQU8sQ0FBQztRQUN6RCxDQUFDO1FBRUQsa0JBQWtCO1FBQ2xCLE1BQU10QixZQUFZdUIsUUFBUSxDQUFDO1lBQ3ZCQyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsU0FBUztZQUNUQyxNQUFNZjtRQUNWO1FBRUEsT0FBTyxJQUFJZ0IsU0FDUEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7UUFBMEIsSUFDcEQ7WUFBRUMsUUFBUTtRQUFJO0lBRXRCLEVBQUUsT0FBT0MsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtRQUM1QyxPQUFPLElBQUlMLFNBQ1BDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1FBQTRCLElBQ3REO1lBQUVDLFFBQVE7UUFBSTtJQUV0QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lyZW4tc3RvcmUvLi9zcmMvYXBwL2FwaS9zZW5kLW9yZGVyL3JvdXRlLmpzP2UzOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgY2FydEl0ZW1zLCB0b3RhbEFtb3VudCwgY3VzdG9tZXIgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgICAgLy8g0J3QsNGB0YLRgNC+0LnQutCwIFNNVFBcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgICAgICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICAgICAgICAgICAgcG9ydDogNTg3LFxuICAgICAgICAgICAgc2VjdXJlOiBmYWxzZSwgLy8gdHJ1ZSDQtNC70Y8gU1NMLCBmYWxzZSDQtNC70Y8gVExTXG4gICAgICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUiwgLy8g0J/QvtGH0YLQsCwg0YEg0LrQvtGC0L7RgNC+0Lkg0L7RgtC/0YDQsNCy0LvRj9GO0YLRgdGPINC/0LjRgdGM0LzQsFxuICAgICAgICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1NXT1JELCAvLyDQn9Cw0YDQvtC70Ywg0L/RgNC40LvQvtC20LXQvdC40Y9cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCk0L7RgNC80LjRgNC+0LLQsNC90LjQtSDRgtC10LrRgdGC0LAg0L/QuNGB0YzQvNCwXG4gICAgICAgIGNvbnN0IGVtYWlsQ29udGVudCA9IGBcbiAgICAgICAgICA8aDE+0J3QvtCy0YvQuSDQt9Cw0LrQsNC3PC9oMT5cbiAgICAgICAgICA8cD48c3Ryb25nPtCY0LzRjyDQt9Cw0LrQsNC30YfQuNC60LA6PC9zdHJvbmc+ICR7Y3VzdG9tZXIubmFtZX08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz7Qn9C+0YfRgtCwINC30LDQutCw0LfRh9C40LrQsDo8L3N0cm9uZz4gJHtjdXN0b21lci5lbWFpbH08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz7QndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0LfQsNC60LDQt9GH0LjQutCwOjwvc3Ryb25nPiAke2N1c3RvbWVyLnBob25lIHx8ICfQndC1INGD0LrQsNC30LDQvSd9PC9wPlxuICAgICAgICAgIDxoMj7QlNC10YLQsNC70Lgg0LfQsNC60LDQt9CwOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgJHtjYXJ0SXRlbXMubWFwKGl0ZW0gPT4gYFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz7QotC+0LLQsNGAOjwvc3Ryb25nPiAke2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz7QmtC+0LvQuNGH0LXRgdGC0LLQvjo8L3N0cm9uZz4gJHtpdGVtLnF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPtCg0LDQt9C80LXRgDo8L3N0cm9uZz4gJHtpdGVtLnNpemV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+0KbQtdC90LA6PC9zdHJvbmc+ICR7aXRlbS5wcmljZX0g0LPRgNC9PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgYCkuam9pbignJyl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8cD48c3Ryb25nPtCe0LHRidCw0Y8g0YHRg9C80LzQsDo8L3N0cm9uZz4gJHt0b3RhbEFtb3VudH0g0LPRgNC9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+0JDQtNGA0LXRgSDQtNC+0YHRgtCw0LLQutC4Ojwvc3Ryb25nPiAke2N1c3RvbWVyLmFkZHJlc3N9PC9wPlxuICAgICAgICBgO1xuXG4gICAgICAgIC8vINCe0YLQv9GA0LDQstC60LAg0L/QuNGB0YzQvNCwXG4gICAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgICAgICAgIGZyb206ICdcIlNpcmVuIFN0b3JlXCIgPHNpcmVuLnNlcmVuYS5vZmZpY2lhbEBnbWFpbC5jb20+JywgLy8g0J7RgtC/0YDQsNCy0LjRgtC10LvRjFxuICAgICAgICAgICAgdG86ICdzaXJlbi5zZXJlbmEub2ZmaWNpYWxAZ21haWwuY29tJywgLy8gRW1haWwg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDQsFxuICAgICAgICAgICAgc3ViamVjdDogJ9Cd0L7QstGL0Lkg0LfQsNC60LDQtycsIC8vINCi0LXQvNCwINC/0LjRgdGM0LzQsFxuICAgICAgICAgICAgaHRtbDogZW1haWxDb250ZW50LCAvLyDQotC10LrRgdGCINC/0LjRgdGM0LzQsFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnT3JkZXIgc2VudCBzdWNjZXNzZnVsbHknIH0pLFxuICAgICAgICAgICAgeyBzdGF0dXM6IDIwMCB9XG4gICAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBvcmRlciBlbWFpbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdFcnJvciBzZW5kaW5nIG9yZGVyIGVtYWlsJyB9KSxcbiAgICAgICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiUE9TVCIsInJlcSIsImNhcnRJdGVtcyIsInRvdGFsQW1vdW50IiwiY3VzdG9tZXIiLCJqc29uIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1VTRVIiLCJwYXNzIiwiRU1BSUxfUEFTU1dPUkQiLCJlbWFpbENvbnRlbnQiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsIm1hcCIsIml0ZW0iLCJxdWFudGl0eSIsInNpemUiLCJwcmljZSIsImpvaW4iLCJhZGRyZXNzIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/send-order/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-order%2Froute&page=%2Fapi%2Fsend-order%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-order%2Froute.js&appDir=%2FUsers%2Fmacbook%2FWork%2Fsiren-store%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacbook%2FWork%2Fsiren-store%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();