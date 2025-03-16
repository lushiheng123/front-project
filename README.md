<h1 align="center">下拉菜单Dropdown</h1>

```sh
git add .
git commit -m "first commit"
git checkout -b Dropdown
git remote add origin git@github.com:lushiheng123/front-project.git
git push -u origin Dropdown
```

# 1. 手写下拉菜单，通过 relative 和 aboulute 定位

```jsx
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
const DropdownLinks = [
  {
    name: "Trending Books",
    link: "/#",
  },
  {
    name: "Best Selling",
    link: "/#",
  },
  {
    name: "Authors",
    link: "/#",
  },
];
export default function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className="group relative cursor-pointer">
        <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
          Quick Links
          <span>
            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
          </span>
        </a>
        <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
          <ul className="space-y-3">
            {DropdownLinks.map((data) => (
              <li key={data.name}>
                <a
                  className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  href={data.link}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
```

![alt text](<README_Images/README/chrome-capture-2025-3-16 (3).gif>)
