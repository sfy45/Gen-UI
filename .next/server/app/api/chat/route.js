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
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

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

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=E%3A%5CGen-UI%5CGen-UI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CGen-UI%5CGen-UI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=E%3A%5CGen-UI%5CGen-UI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CGen-UI%5CGen-UI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Gen_UI_Gen_UI_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/route.ts */ \"(rsc)/./app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"E:\\\\Gen-UI\\\\Gen-UI\\\\app\\\\api\\\\chat\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Gen_UI_Gen_UI_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/chat/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDR2VuLVVJJTVDR2VuLVVJJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDR2VuLVVJJTVDR2VuLVVJJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0o7QUFDekU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW51aS8/ZmM1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxHZW4tVUlcXFxcR2VuLVVJXFxcXGFwcFxcXFxhcGlcXFxcY2hhdFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2hhdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NoYXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NoYXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxHZW4tVUlcXFxcR2VuLVVJXFxcXGFwcFxcXFxhcGlcXFxcY2hhdFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jaGF0L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=E%3A%5CGen-UI%5CGen-UI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CGen-UI%5CGen-UI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/chat/route.ts":
/*!*******************************!*\
  !*** ./app/api/chat/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/generative-ai */ \"(rsc)/./node_modules/@google/generative-ai/dist/index.mjs\");\n\n\n\n// Initialize Google Generative AI\nconst GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;\nconst OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;\nif (!GOOGLE_API_KEY) {\n    console.warn(\"GOOGLE_API_KEY is not set. AI features will be limited.\");\n}\nif (!OPENWEATHER_API_KEY) {\n    console.warn(\"OPENWEATHER_API_KEY is not set. Weather feature will be limited.\");\n}\nconst genAI = GOOGLE_API_KEY ? new _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.GoogleGenerativeAI(GOOGLE_API_KEY) : null;\nconst googleModel = genAI ? genAI.getGenerativeModel({\n    model: \"gemini-1.5-flash-latest\",\n    // Safety settings can be adjusted as needed\n    safetySettings: [\n        {\n            category: _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.HarmCategory.HARM_CATEGORY_HARASSMENT,\n            threshold: _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE\n        },\n        {\n            category: _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.HarmCategory.HARM_CATEGORY_HATE_SPEECH,\n            threshold: _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE\n        },\n        {\n            category: _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,\n            threshold: _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE\n        },\n        {\n            category: _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,\n            threshold: _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE\n        }\n    ]\n}) : null;\nasync function getWeatherData(city) {\n    if (!OPENWEATHER_API_KEY) {\n        return \"I'm sorry, the weather service is currently unavailable (API key missing).\";\n    }\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`);\n        const data = response.data;\n        return `The current weather in ${data.name} is ${data.weather[0].description} with a temperature of ${data.main.temp}°C (feels like ${data.main.feels_like}°C). Humidity is ${data.main.humidity}%.`;\n    } catch (error) {\n        console.error(\"Error fetching weather data:\", error);\n        if (axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAxiosError(error) && error.response?.status === 404) {\n            return `Sorry, I couldn't find weather data for \"${city}\". Please check the city name.`;\n        }\n        return \"Sorry, I couldn't fetch the weather information at this moment.\";\n    }\n}\nasync function generateGoogleAIResponse(query) {\n    if (!googleModel) {\n        return \"I'm sorry, the AI assistant is currently unavailable (API key or model issue).\";\n    }\n    try {\n        const result = await googleModel.generateContent(query);\n        const response = await result.response;\n        return response.text();\n    } catch (error) {\n        console.error(\"Error generating Google AI response:\", error);\n        return \"I'm sorry, I encountered an issue trying to understand that. Could you try rephrasing?\";\n    }\n}\n// Updated response generator\nasync function generateResponse(query) {\n    const lowerQuery = query.toLowerCase();\n    if (lowerQuery.startsWith(\"weather in \") || lowerQuery === \"weather\") {\n        const city = lowerQuery.startsWith(\"weather in \") ? lowerQuery.substring(\"weather in \".length).trim() : \"your current location\" // You might want to implement location detection or ask\n        ;\n        if (city === \"your current location\" && lowerQuery === \"weather\") return \"Sure, which city's weather are you interested in? For example, 'weather in London'.\";\n        return getWeatherData(city);\n    } else if (lowerQuery.includes(\"time\") || lowerQuery.includes(\"date\")) {\n        return `The current date and time is ${new Date().toLocaleString()}.`;\n    } else {\n        // For all other queries, use Google AI\n        return generateGoogleAIResponse(query);\n    }\n}\nasync function POST(request) {\n    try {\n        // Parse the request body\n        const formData = await request.formData();\n        const message = formData.get(\"message\");\n        if (!message) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                response: \"Please provide a message to process.\"\n            });\n        }\n        // Generate a response based on the message\n        const response = await generateResponse(message) // Now an async call\n        ;\n        // Return the response\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            response\n        });\n    } catch (error) {\n        console.error(\"Error in chat API:\", error);\n        // Return a friendly error message\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            response: \"I'm sorry, I encountered an error processing your request. Please try again.\"\n        }, {\n            status: 200\n        }) // Return 200 even for errors to avoid client-side error handling\n        ;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLEVBQUVDLElBQUksS0FBSyx3QkFBd0Isd0RBQXdEOztRQUN4TCxJQUFJMUIsU0FBUywyQkFBMkJxQixlQUFlLFdBQVcsT0FBTztRQUN6RSxPQUFPdEIsZUFBZUM7SUFDeEIsT0FBTyxJQUFJcUIsV0FBV00sUUFBUSxDQUFDLFdBQVdOLFdBQVdNLFFBQVEsQ0FBQyxTQUFTO1FBQ3JFLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxJQUFJQyxPQUFPQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU87UUFDTCx1Q0FBdUM7UUFDdkMsT0FBT2QseUJBQXlCQztJQUNsQztBQUNGO0FBRU8sZUFBZWMsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLHlCQUF5QjtRQUN6QixNQUFNQyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7UUFDdkMsTUFBTUMsVUFBVUQsU0FBUzlCLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMrQixTQUFTO1lBQ1osT0FBT3pELGtGQUFZQSxDQUFDMEQsSUFBSSxDQUFDO2dCQUN2QmpDLFVBQVU7WUFDWjtRQUNGO1FBRUEsMkNBQTJDO1FBQzNDLE1BQU1BLFdBQVcsTUFBTW1CLGlCQUFpQmEsU0FBUyxvQkFBb0I7O1FBRXJFLHNCQUFzQjtRQUN0QixPQUFPekQsa0ZBQVlBLENBQUMwRCxJQUFJLENBQUM7WUFBRWpDO1FBQVM7SUFDdEMsRUFBRSxPQUFPVyxPQUFPO1FBQ2QzQixRQUFRMkIsS0FBSyxDQUFDLHNCQUFzQkE7UUFFcEMsa0NBQWtDO1FBQ2xDLE9BQU9wQyxrRkFBWUEsQ0FBQzBELElBQUksQ0FDdEI7WUFDRWpDLFVBQVU7UUFDWixHQUNBO1lBQUVhLFFBQVE7UUFBSSxHQUNkLGlFQUFpRTs7SUFDckU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbnVpLy4vYXBwL2FwaS9jaGF0L3JvdXRlLnRzP2RlNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSwgSGFybUNhdGVnb3J5LCBIYXJtQmxvY2tUaHJlc2hvbGQgfSBmcm9tIFwiQGdvb2dsZS9nZW5lcmF0aXZlLWFpXCJcclxuXHJcbi8vIEluaXRpYWxpemUgR29vZ2xlIEdlbmVyYXRpdmUgQUlcclxuY29uc3QgR09PR0xFX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5HT09HTEVfQVBJX0tFWVxyXG5jb25zdCBPUEVOV0VBVEhFUl9BUElfS0VZID0gcHJvY2Vzcy5lbnYuT1BFTldFQVRIRVJfQVBJX0tFWVxyXG5cclxuaWYgKCFHT09HTEVfQVBJX0tFWSkge1xyXG4gIGNvbnNvbGUud2FybihcIkdPT0dMRV9BUElfS0VZIGlzIG5vdCBzZXQuIEFJIGZlYXR1cmVzIHdpbGwgYmUgbGltaXRlZC5cIilcclxufVxyXG5pZiAoIU9QRU5XRUFUSEVSX0FQSV9LRVkpIHtcclxuICBjb25zb2xlLndhcm4oXCJPUEVOV0VBVEhFUl9BUElfS0VZIGlzIG5vdCBzZXQuIFdlYXRoZXIgZmVhdHVyZSB3aWxsIGJlIGxpbWl0ZWQuXCIpXHJcbn1cclxuXHJcbmNvbnN0IGdlbkFJID0gR09PR0xFX0FQSV9LRVkgPyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKEdPT0dMRV9BUElfS0VZKSA6IG51bGxcclxuY29uc3QgZ29vZ2xlTW9kZWwgPSBnZW5BSSA/IGdlbkFJLmdldEdlbmVyYXRpdmVNb2RlbCh7XHJcbiAgbW9kZWw6IFwiZ2VtaW5pLTEuNS1mbGFzaC1sYXRlc3RcIiwgLy8gT3IgeW91ciBwcmVmZXJyZWQgbW9kZWxcclxuICAvLyBTYWZldHkgc2V0dGluZ3MgY2FuIGJlIGFkanVzdGVkIGFzIG5lZWRlZFxyXG4gIHNhZmV0eVNldHRpbmdzOiBbXHJcbiAgICB7IGNhdGVnb3J5OiBIYXJtQ2F0ZWdvcnkuSEFSTV9DQVRFR09SWV9IQVJBU1NNRU5ULCB0aHJlc2hvbGQ6IEhhcm1CbG9ja1RocmVzaG9sZC5CTE9DS19NRURJVU1fQU5EX0FCT1ZFIH0sXHJcbiAgICB7IGNhdGVnb3J5OiBIYXJtQ2F0ZWdvcnkuSEFSTV9DQVRFR09SWV9IQVRFX1NQRUVDSCwgdGhyZXNob2xkOiBIYXJtQmxvY2tUaHJlc2hvbGQuQkxPQ0tfTUVESVVNX0FORF9BQk9WRSB9LFxyXG4gICAgeyBjYXRlZ29yeTogSGFybUNhdGVnb3J5LkhBUk1fQ0FURUdPUllfU0VYVUFMTFlfRVhQTElDSVQsIHRocmVzaG9sZDogSGFybUJsb2NrVGhyZXNob2xkLkJMT0NLX01FRElVTV9BTkRfQUJPVkUgfSxcclxuICAgIHsgY2F0ZWdvcnk6IEhhcm1DYXRlZ29yeS5IQVJNX0NBVEVHT1JZX0RBTkdFUk9VU19DT05URU5ULCB0aHJlc2hvbGQ6IEhhcm1CbG9ja1RocmVzaG9sZC5CTE9DS19NRURJVU1fQU5EX0FCT1ZFIH0sXHJcbiAgXSxcclxufSkgOiBudWxsXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIGlmICghT1BFTldFQVRIRVJfQVBJX0tFWSkge1xyXG4gICAgcmV0dXJuIFwiSSdtIHNvcnJ5LCB0aGUgd2VhdGhlciBzZXJ2aWNlIGlzIGN1cnJlbnRseSB1bmF2YWlsYWJsZSAoQVBJIGtleSBtaXNzaW5nKS5cIlxyXG4gIH1cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtlbmNvZGVVUklDb21wb25lbnQoY2l0eSl9JmFwcGlkPSR7T1BFTldFQVRIRVJfQVBJX0tFWX0mdW5pdHM9bWV0cmljYCxcclxuICAgIClcclxuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhXHJcbiAgICByZXR1cm4gYFRoZSBjdXJyZW50IHdlYXRoZXIgaW4gJHtkYXRhLm5hbWV9IGlzICR7ZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSB3aXRoIGEgdGVtcGVyYXR1cmUgb2YgJHtkYXRhLm1haW4udGVtcH3CsEMgKGZlZWxzIGxpa2UgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX3CsEMpLiBIdW1pZGl0eSBpcyAke2RhdGEubWFpbi5odW1pZGl0eX0lLmBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YTpcIiwgZXJyb3IpXHJcbiAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSAmJiBlcnJvci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgcmV0dXJuIGBTb3JyeSwgSSBjb3VsZG4ndCBmaW5kIHdlYXRoZXIgZGF0YSBmb3IgXCIke2NpdHl9XCIuIFBsZWFzZSBjaGVjayB0aGUgY2l0eSBuYW1lLmBcclxuICAgIH1cclxuICAgIHJldHVybiBcIlNvcnJ5LCBJIGNvdWxkbid0IGZldGNoIHRoZSB3ZWF0aGVyIGluZm9ybWF0aW9uIGF0IHRoaXMgbW9tZW50LlwiXHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUdvb2dsZUFJUmVzcG9uc2UocXVlcnk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgaWYgKCFnb29nbGVNb2RlbCkge1xyXG4gICAgcmV0dXJuIFwiSSdtIHNvcnJ5LCB0aGUgQUkgYXNzaXN0YW50IGlzIGN1cnJlbnRseSB1bmF2YWlsYWJsZSAoQVBJIGtleSBvciBtb2RlbCBpc3N1ZSkuXCJcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdvb2dsZU1vZGVsLmdlbmVyYXRlQ29udGVudChxdWVyeSlcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzdWx0LnJlc3BvbnNlXHJcbiAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZW5lcmF0aW5nIEdvb2dsZSBBSSByZXNwb25zZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4gXCJJJ20gc29ycnksIEkgZW5jb3VudGVyZWQgYW4gaXNzdWUgdHJ5aW5nIHRvIHVuZGVyc3RhbmQgdGhhdC4gQ291bGQgeW91IHRyeSByZXBocmFzaW5nP1wiXHJcbiAgfVxyXG59XHJcblxyXG4vLyBVcGRhdGVkIHJlc3BvbnNlIGdlbmVyYXRvclxyXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVJlc3BvbnNlKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIGNvbnN0IGxvd2VyUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpXHJcblxyXG4gIGlmIChsb3dlclF1ZXJ5LnN0YXJ0c1dpdGgoXCJ3ZWF0aGVyIGluIFwiKSB8fCBsb3dlclF1ZXJ5ID09PSBcIndlYXRoZXJcIikge1xyXG4gICAgY29uc3QgY2l0eSA9IGxvd2VyUXVlcnkuc3RhcnRzV2l0aChcIndlYXRoZXIgaW4gXCIpID8gbG93ZXJRdWVyeS5zdWJzdHJpbmcoXCJ3ZWF0aGVyIGluIFwiLmxlbmd0aCkudHJpbSgpIDogXCJ5b3VyIGN1cnJlbnQgbG9jYXRpb25cIiAvLyBZb3UgbWlnaHQgd2FudCB0byBpbXBsZW1lbnQgbG9jYXRpb24gZGV0ZWN0aW9uIG9yIGFza1xyXG4gICAgaWYgKGNpdHkgPT09IFwieW91ciBjdXJyZW50IGxvY2F0aW9uXCIgJiYgbG93ZXJRdWVyeSA9PT0gXCJ3ZWF0aGVyXCIpIHJldHVybiBcIlN1cmUsIHdoaWNoIGNpdHkncyB3ZWF0aGVyIGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8gRm9yIGV4YW1wbGUsICd3ZWF0aGVyIGluIExvbmRvbicuXCJcclxuICAgIHJldHVybiBnZXRXZWF0aGVyRGF0YShjaXR5KVxyXG4gIH0gZWxzZSBpZiAobG93ZXJRdWVyeS5pbmNsdWRlcyhcInRpbWVcIikgfHwgbG93ZXJRdWVyeS5pbmNsdWRlcyhcImRhdGVcIikpIHtcclxuICAgIHJldHVybiBgVGhlIGN1cnJlbnQgZGF0ZSBhbmQgdGltZSBpcyAke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX0uYFxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBGb3IgYWxsIG90aGVyIHF1ZXJpZXMsIHVzZSBHb29nbGUgQUlcclxuICAgIHJldHVybiBnZW5lcmF0ZUdvb2dsZUFJUmVzcG9uc2UocXVlcnkpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFBhcnNlIHRoZSByZXF1ZXN0IGJvZHlcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXHJcbiAgICBjb25zdCBtZXNzYWdlID0gZm9ybURhdGEuZ2V0KFwibWVzc2FnZVwiKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICByZXNwb25zZTogXCJQbGVhc2UgcHJvdmlkZSBhIG1lc3NhZ2UgdG8gcHJvY2Vzcy5cIixcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHJlc3BvbnNlIGJhc2VkIG9uIHRoZSBtZXNzYWdlXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdlbmVyYXRlUmVzcG9uc2UobWVzc2FnZSkgLy8gTm93IGFuIGFzeW5jIGNhbGxcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHJlc3BvbnNlXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByZXNwb25zZSB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gY2hhdCBBUEk6XCIsIGVycm9yKVxyXG5cclxuICAgIC8vIFJldHVybiBhIGZyaWVuZGx5IGVycm9yIG1lc3NhZ2VcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAge1xyXG4gICAgICAgIHJlc3BvbnNlOiBcIkknbSBzb3JyeSwgSSBlbmNvdW50ZXJlZCBhbiBlcnJvciBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcclxuICAgICAgfSxcclxuICAgICAgeyBzdGF0dXM6IDIwMCB9LFxyXG4gICAgKSAvLyBSZXR1cm4gMjAwIGV2ZW4gZm9yIGVycm9ycyB0byBhdm9pZCBjbGllbnQtc2lkZSBlcnJvciBoYW5kbGluZ1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiYXhpb3MiLCJHb29nbGVHZW5lcmF0aXZlQUkiLCJIYXJtQ2F0ZWdvcnkiLCJIYXJtQmxvY2tUaHJlc2hvbGQiLCJHT09HTEVfQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOV0VBVEhFUl9BUElfS0VZIiwiY29uc29sZSIsIndhcm4iLCJnZW5BSSIsImdvb2dsZU1vZGVsIiwiZ2V0R2VuZXJhdGl2ZU1vZGVsIiwibW9kZWwiLCJzYWZldHlTZXR0aW5ncyIsImNhdGVnb3J5IiwiSEFSTV9DQVRFR09SWV9IQVJBU1NNRU5UIiwidGhyZXNob2xkIiwiQkxPQ0tfTUVESVVNX0FORF9BQk9WRSIsIkhBUk1fQ0FURUdPUllfSEFURV9TUEVFQ0giLCJIQVJNX0NBVEVHT1JZX1NFWFVBTExZX0VYUExJQ0lUIiwiSEFSTV9DQVRFR09SWV9EQU5HRVJPVVNfQ09OVEVOVCIsImdldFdlYXRoZXJEYXRhIiwiY2l0eSIsInJlc3BvbnNlIiwiZ2V0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGF0YSIsIm5hbWUiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJtYWluIiwidGVtcCIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsImVycm9yIiwiaXNBeGlvc0Vycm9yIiwic3RhdHVzIiwiZ2VuZXJhdGVHb29nbGVBSVJlc3BvbnNlIiwicXVlcnkiLCJyZXN1bHQiLCJnZW5lcmF0ZUNvbnRlbnQiLCJ0ZXh0IiwiZ2VuZXJhdGVSZXNwb25zZSIsImxvd2VyUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJ0cmltIiwiaW5jbHVkZXMiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJQT1NUIiwicmVxdWVzdCIsImZvcm1EYXRhIiwibWVzc2FnZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/debug","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-flag","vendor-chunks/axios","vendor-chunks/asynckit","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/mime-db","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/form-data","vendor-chunks/follow-redirects","vendor-chunks/@google","vendor-chunks/proxy-from-env","vendor-chunks/mime-types","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/get-intrinsic","vendor-chunks/es-set-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/delayed-stream","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=E%3A%5CGen-UI%5CGen-UI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CGen-UI%5CGen-UI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();