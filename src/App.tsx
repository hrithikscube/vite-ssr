import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

//@ts-ignore
const PagePathsWithComponents = import.meta.glob('./pages/*.tsx', { eager: true })

//Example Output: 
// const modules = {
//   './pages/About.tsx': () => import('./pages/About.js'),
//   './pages/Home.tsx': () => import('./pages/Home.tsx')
// }


// const routes = Object.keys(PagePathsWithComponents).map((path: string) => {
//   const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1]
//   return {
//     name,
//     path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
//     component: PagePathsWithComponents[path].default
//   }
// })

export function App() {
  return (
    <>
      {/* <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </nav> */}
      <Routes>
        {/* {routes.map(({ path, component: RouteComp }) => {
          return <Route key={path} path={path} element={<RouteComp />} />
        })} */}

        <Route key={"/"} path={"/"} element={<Home />} />
        <Route key={"/about"} path={"/about"} element={<About />} />
        <Route key={"/products"} path={"/products"} element={<Products />} />

      </Routes>
    </>
  )
}
