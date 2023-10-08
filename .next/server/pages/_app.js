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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/MediumContext.js":
/*!**********************************!*\
  !*** ./context/MediumContext.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MediumContext: () => (/* binding */ MediumContext),\n/* harmony export */   MediumProvider: () => (/* binding */ MediumProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst MediumContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst MediumProvider = ({ children })=>{\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // getting the users\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUsers = async ()=>{\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\"));\n            setUsers(querySnapshot.docs.map((doc)=>{\n                return {\n                    id: doc.id,\n                    data: {\n                        ...doc.data()\n                    }\n                };\n            }));\n        };\n        getUsers();\n    }, []);\n    // getting the posts/articles\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPosts = async ()=>{\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"articles\"));\n            setPosts(querySnapshot.docs.map((doc)=>{\n                return {\n                    id: doc.id,\n                    data: {\n                        body: doc.data().body,\n                        brief: doc.data().brief,\n                        category: doc.data().category,\n                        postLength: doc.data().postLength,\n                        bannerImage: doc.data().bannerImage,\n                        title: doc.data().title,\n                        postedOn: doc.data().postedOn.toDate(),\n                        author: doc.data().author\n                    }\n                };\n            }));\n        };\n        getPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MediumContext.Provider, {\n        value: {\n            posts,\n            users\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/alejandro/Desktop/medium-clone/context/MediumContext.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L01lZGl1bUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ1c7QUFDckM7QUFFakMsTUFBTVEsOEJBQWdCUixvREFBYUE7QUFFbkMsTUFBTVMsaUJBQWlCLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ2xDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLG9CQUFvQjtJQUNwQkMsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxXQUFXO1lBQ2YsTUFBTUMsZ0JBQWdCLE1BQU1aLDJEQUFPQSxDQUFDRCw4REFBVUEsQ0FBQ0kseUNBQUVBLEVBQUU7WUFDbkRLLFNBQ0VJLGNBQWNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNaO2dCQUN0QixPQUFPO29CQUNMYSxJQUFJYixJQUFJYSxFQUFFO29CQUNWQyxNQUFNO3dCQUNKLEdBQUdkLElBQUljLElBQUksRUFBRTtvQkFDZjtnQkFDRjtZQUNGO1FBRUo7UUFFQUw7SUFDRixHQUFHLEVBQUU7SUFFTCw2QkFBNkI7SUFDN0JiLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTW1CLFdBQVc7WUFDZixNQUFNTCxnQkFBZ0IsTUFBTVosMkRBQU9BLENBQUNELDhEQUFVQSxDQUFDSSx5Q0FBRUEsRUFBRTtZQUNuRE8sU0FDRUUsY0FBY0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ1o7Z0JBQ3RCLE9BQU87b0JBQ0xhLElBQUliLElBQUlhLEVBQUU7b0JBQ1ZDLE1BQU07d0JBQ0pFLE1BQU1oQixJQUFJYyxJQUFJLEdBQUdFLElBQUk7d0JBQ3JCQyxPQUFPakIsSUFBSWMsSUFBSSxHQUFHRyxLQUFLO3dCQUN2QkMsVUFBVWxCLElBQUljLElBQUksR0FBR0ksUUFBUTt3QkFDN0JDLFlBQVluQixJQUFJYyxJQUFJLEdBQUdLLFVBQVU7d0JBQ2pDQyxhQUFhcEIsSUFBSWMsSUFBSSxHQUFHTSxXQUFXO3dCQUNuQ0MsT0FBT3JCLElBQUljLElBQUksR0FBR08sS0FBSzt3QkFDdkJDLFVBQVV0QixJQUFJYyxJQUFJLEdBQUdRLFFBQVEsQ0FBQ0MsTUFBTTt3QkFDcENDLFFBQVF4QixJQUFJYyxJQUFJLEdBQUdVLE1BQU07b0JBQzNCO2dCQUNGO1lBQ0Y7UUFFSjtRQUVBVDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDYixjQUFjdUIsUUFBUTtRQUFDQyxPQUFPO1lBQUVuQjtZQUFPRjtRQUFNO2tCQUMzQ0Q7Ozs7OztBQUdQO0FBRXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLWNsb25lLy4vY29udGV4dC9NZWRpdW1Db250ZXh0LmpzPzQyMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgc2V0RG9jLCBkb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuXG5jb25zdCBNZWRpdW1Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBNZWRpdW1Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIGdldHRpbmcgdGhlIHVzZXJzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpKTtcbiAgICAgIHNldFVzZXJzKFxuICAgICAgICBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGdldFVzZXJzKCk7XG4gIH0sIFtdKTtcblxuICAvLyBnZXR0aW5nIHRoZSBwb3N0cy9hcnRpY2xlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJhcnRpY2xlc1wiKSk7XG4gICAgICBzZXRQb3N0cyhcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGJvZHk6IGRvYy5kYXRhKCkuYm9keSxcbiAgICAgICAgICAgICAgYnJpZWY6IGRvYy5kYXRhKCkuYnJpZWYsXG4gICAgICAgICAgICAgIGNhdGVnb3J5OiBkb2MuZGF0YSgpLmNhdGVnb3J5LFxuICAgICAgICAgICAgICBwb3N0TGVuZ3RoOiBkb2MuZGF0YSgpLnBvc3RMZW5ndGgsXG4gICAgICAgICAgICAgIGJhbm5lckltYWdlOiBkb2MuZGF0YSgpLmJhbm5lckltYWdlLFxuICAgICAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcbiAgICAgICAgICAgICAgcG9zdGVkT246IGRvYy5kYXRhKCkucG9zdGVkT24udG9EYXRlKCksXG4gICAgICAgICAgICAgIGF1dGhvcjogZG9jLmRhdGEoKS5hdXRob3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG5cbiAgICBnZXRQb3N0cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWVkaXVtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwb3N0cywgdXNlcnMgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NZWRpdW1Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgTWVkaXVtQ29udGV4dCwgTWVkaXVtUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsInNldERvYyIsImRvYyIsImRiIiwiTWVkaXVtQ29udGV4dCIsIk1lZGl1bVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VycyIsInNldFVzZXJzIiwicG9zdHMiLCJzZXRQb3N0cyIsImdldFVzZXJzIiwicXVlcnlTbmFwc2hvdCIsImRvY3MiLCJtYXAiLCJpZCIsImRhdGEiLCJnZXRQb3N0cyIsImJvZHkiLCJicmllZiIsImNhdGVnb3J5IiwicG9zdExlbmd0aCIsImJhbm5lckltYWdlIiwidGl0bGUiLCJwb3N0ZWRPbiIsInRvRGF0ZSIsImF1dGhvciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/MediumContext.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   provider: () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDGoNp7bL22BVvljmjo7qZ3MwVSZdt3tq8\",\n    authDomain: \"medium-clone-58bba.firebaseapp.com\",\n    projectId: \"medium-clone-58bba\",\n    storageBucket: \"medium-clone-58bba.appspot.com\",\n    messagingSenderId: \"437288146576\",\n    appId: \"1:437288146576:web:54444f1b3d794746882a15\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDVjtBQUNMO0FBQ1c7QUFDRDtBQUVsRCx3Q0FBd0M7QUFDeEMsTUFBTUksaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsTUFBTVgsMkRBQWFBLENBQUNJO0FBQzFCLE1BQU1RLE9BQU9YLHNEQUFPQSxDQUFDVTtBQUNyQixNQUFNRSxXQUFXLElBQUlYLDZEQUFrQkE7QUFDdkMsTUFBTVksS0FBS1gsZ0VBQVlBLENBQUNRO0FBRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpdW0tY2xvbmUvLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5REdvTnA3YkwyMkJWdmxqbWpvN3FaM013VlNaZHQzdHE4XCIsXG4gIGF1dGhEb21haW46IFwibWVkaXVtLWNsb25lLTU4YmJhLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwibWVkaXVtLWNsb25lLTU4YmJhXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibWVkaXVtLWNsb25lLTU4YmJhLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQzNzI4ODE0NjU3NlwiLFxuICBhcHBJZDogXCIxOjQzNzI4ODE0NjU3Njp3ZWI6NTQ0NDRmMWIzZDc5NDc0Njg4MmExNVwiLFxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuXG5leHBvcnQgeyBhdXRoLCBwcm92aWRlciwgZGIgfTtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiYXV0aCIsInByb3ZpZGVyIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_MediumContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/MediumContext */ \"./context/MediumContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_MediumContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_MediumContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_MediumContext__WEBPACK_IMPORTED_MODULE_2__.MediumProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/medium-clone/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/medium-clone/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDMkI7QUFFMUQsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0gsa0VBQWNBOzswQkFDYiw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7O1lBQUk7Ozs7Ozs7QUFHbEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGl1bS1jbG9uZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IE1lZGl1bVByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvTWVkaXVtQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWVkaXVtUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuICAgIDwvTWVkaXVtUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIk1lZGl1bVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();