import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
const messages = [
  { name: "John Doe", subject: "Project Update", status: "Completed" },
  { name: "Jane Smith", subject: "New Task Assigned", status: "Waiting" },
  { name: "Emily Johnson", subject: "Feedback Request", status: "Completed" },
  { name: "John Doe", subject: "Project Update", status: "Completed" },
  { name: "Jane Smith", subject: "New Task Assigned", status: "Waiting" },
  { name: "Emily Johnson", subject: "Feedback Request", status: "Completed" },
];
export default function Notification() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-auto flex flex-row ">
        <div className="w-full flex flex-col gap-3 p-5">
          <div className="w-full flex flex-row justify-evenly text-blue-700 text-2xl font-bold">
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-3 text-2xl font-bold text-blue-700 shadow-sm ring-gray-300 hover:bg-card">
                  Options
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-700"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute z-10 mt-2 rounded-md bg-card shadow-lg ring-1 ring-black"
              >
                <div>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                    >
                      License
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <div className="text-white">
              <button className="p-3 bg-card rounded-lg">
                <FontAwesomeIcon icon={faRotateRight} />
              </button>
            </div>
          </div>
          <div>
            <input
              type="text"
              className="outline-none bg-card p-3 rounded-lg placeholder-gray-500"
              placeholder="Search"
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row gap-3 text-center items-center">
              <h1 className="font-bold text-2xl relative">New Replies</h1>
              <Menu as="div" className="relative">
                <div>
                  <MenuButton className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-3 text-2xl font-bold text-blue-700 shadow-sm ring-gray-300 hover:bg-card">
                    Newest
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-blue-700"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute z-10 mt-2 rounded-md bg-card shadow-lg ring-1 ring-black"
                >
                  <div>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                      >
                        Account settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                      >
                        Support
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                      >
                        License
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
            <div className="w-full flex flex-col ">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col justify-between  p-3 rounded-lg gap-6"
                >
                  <hr className="border-gray-500  " />
                  <div className="w-full flex flex-col justify-center">
                    <h3 className="font-semibold">{message.name}</h3>
                    <p className="text-gray-700">{message.subject}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-l border-l-gray-600 flex w-4/6 flex-col border-r border-r-gray-600">
        <div className="top_mid flex flex-row justify-between p-3 border-b border-b-gray-600">
          <div>
            <h1>Orlando</h1>
            <p>Orlando@gmail.com</p>
          </div>
          <div className="top_right flex w-auto justify-evenly gap-10">
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-card px-3 py-3 text-2xl font-bold text-blue-700 shadow-sm ring-gray-300 hover:bg-card">
                  Meeting Completed
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-700"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute z-10 mt-2 rounded-md bg-card shadow-lg ring-1 ring-black"
              >
                <div>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                    >
                      License
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <Menu as="div" className="relative">
                <div>
                  <MenuButton className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-card px-3 py-3 text-2xl font-bold text-blue-700 shadow-sm ring-gray-300 hover:bg-card">
                    More
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-blue-700"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute z-10 mt-2 rounded-md bg-card shadow-lg ring-1 ring-black"
                >
                  <div>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                      >
                        Account settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                      >
                        Support
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-blue-700 hover:bg-card hover:text-blue-700"
                      >
                        License
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
          </div>
        </div>
      </div>
      <div>
        <h1>right</h1>
      </div>
    </div>
  );
}
