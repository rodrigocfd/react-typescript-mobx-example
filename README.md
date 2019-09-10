# React TypeScript MobX Example

A reference [React](https://reactjs.org) project written in [TypeScript](https://www.typescriptlang.org), using [hooks](https://reactjs.org/docs/hooks-intro.html) and [MobX Lite](https://github.com/mobxjs/mobx-react-lite) for state management.

## Store

* [mobxStore.ts](src/store/mobxStore.ts?ts=4) declares the store itself;
* [useMobxStore.tsx](src/store/useMobxStore.tsx?ts=4) is a custom hook to access the store;
* [Person.ts](src/store/Person.ts?ts=4) is an example of an interface being stored.

## Reading and writing

* [App.tsx](src/app/App.tsx?ts=4) is the root component, wrapped in the store provider;
* [other components](src/app) show how to read and write the store.
