## Workshop

### Create
```
$npm create vite@latest hello <!-- choose > freamwork : react, variant : react -->
$cd hello
$npm i > install
$npm run dev <!-- run at localhost -->
$Npm run  build <!-- build deploy package -->
$npm run preveiw <!-- run deploy package at localhost -->
```

### Deploy to GitHub Pages
```
$npm run build
$git add dist -f 
$git commit -m "Deploy"
$git subtree push --prefix dist origin gh-pages
```