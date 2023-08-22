# How to load in https

npx parcel index.html --https

# prod build

npx parcel build index.html

# JSX prevent cross site scripting

config driven UI
UI and data layer

# Why we use key in React js ?

Keys are used in React to identify which items in the list are changed, updated, or deleted.

Exact usage of key is if key is not provided then react will rerender all card but if key is provided then only that card is needed to change it

Use of index in place of key is can be used but not preffered by react itself[ index as a key is an anti-pattern] not recommended
No key Not Acceptable Use index last option

# Why do we use react if all thing is done by using HTML, css , js

It makes developer experience easy
it make su write less code and do more, thi sis th emain job of UI library or framework

# Why react component begin with captal letter

This convention is because only HTML elements and SVG tags can begin with a lowercase letter.
React treats components starting with lowercase letters as DOM tags.

# Want to filter data from useState and on button click then use different usestate and send data to main updated array function

# Ui and Data layer work with each other all frame, lib try to sole this view, angular, react

# Ui layer and data layer consisitent work with each other when data changes

# Why react is fast

it can do
faster dom menupulation
efficient dom menupulation
irtual dom
cliff algo
reconcillation
react fiber

# when ever the state variables udates react updateds dome known as render

usestate() normal js function gve some utility

# ReConcillation algo:- also known as react fiber

How ReConcillation

7 cards virtual dom
pres button
3 card

react creates virtual dom which is representation of actual dom

diff algo find the diff between virtual and actual dom on every render cycle

find diff between two html elemt i though diff between two object is easy when change in state variable

# Monolith:- Whole Application APi, ui, Auth, DB, SMs allin one in single projet and change in one button then whole project rebuild, buid & will re-deploy Use to work on save repository.

every thing work in java if project build in java

# Microservice arctisture:- Each evry small thing have different project( APi, ui, Auth, DB, SMs ) each team working with therir individual service project and share data through api.

every thing work in different Projects build in which they want

# Data loads two approaches

1. LOads with api call and as soon as we get data whole willl render at once Poor UI experience

2. As soon as .loads end api call to get data as soon as get data render it Best UI experience

# Conditional rendering

Rendering according to condition known as conditional rendering

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Ajayji77/pro1.git
git push -u origin main

Hooks are used to create state in function component at the top inside function

never use state inside if else condition, function, loops.

# appRouter=createBrowserRouter() Takes a list of path

# pass this "appRouter" inside RouterProvider

# manually remove index.lock file

git remote set-url origin https://github.com/ajay-CaTi/pro-p2.git

# when new instance of class created / class loads, first constructr is called!

# why didn't use async in useeffect

// But an async function returns a Promise, which can't be called as a function! It's simply not what the useEffect hook expects for its first argument

# HOw code become ore modular, mentainable and testable

Break down code into diff diff small modules(havve single responsibility)

# REsuable

# mentanable

# testable

# Keep your component light

# Hooks are normal JS utility function

#

# tesr case of this code is simple
