import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Todo } from '../interfaces/todo.interface';

type OptionsProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const filters = {
  all: 'All',
  active: 'Active',
  done: 'Done'
};

const Options = ({ todos, setTodos }: OptionsProps) => {
  const [filter, setFilter] = useState<string>(filters.all);

  const handleMark = () => {
    setTodos(
      todos.map(item => {
        item.isDone = true;

        return item;
      })
    );
  };

  return (
    <div className="flex items-center justify-between">
      <button
        type="button"
        onClick={handleMark}
        className="px-4 py-2 text-gray-900 bg-gray-100 border rounded focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        Mark All
      </button>
      <Listbox value={filter} onChange={setFilter}>
        <div className="relative w-40">
          <Listbox.Button className="relative pl-4 pr-10 py-2 w-full text-left bg-gray-100 rounded focus:outline-none cursor-default focus:ring-4 focus:ring-indigo-300">
            <span className="block truncate">{filter}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-2 py-1 w-full max-h-60 text-base bg-gray-100 rounded focus:outline-none shadow-lg overflow-auto ring-1 ring-black ring-opacity-5 sm:text-sm">
              {Object.values(filters).map((value, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `${active ? 'text-indigo-900 bg-indigo-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={value}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}
                      >
                        {value}
                      </span>
                      {selected ? (
                        <span
                          className={`${active ? 'text-amber-600' : 'text-amber-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Options;
