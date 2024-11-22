import { useState, useRef } from "react";

interface IToast {
  id: any;
  message: string;
  color: string;
}

export default function Toaster() {
  const [toasts, setToasts] = useState<IToast[]>([]);
  const refs = useRef<any>({});

  const handleHideToast = (id: any) => {
    setToasts((prevToasts) => prevToasts.filter((t: IToast) => t.id !== id));
    clearTimeout(refs.current[id]);
    delete refs.current[id];
  };

  const handleAdd = (message: string, color: string) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, message, color }]);
    refs.current[id] = setTimeout(() => {
      handleHideToast(id);
    }, 2000);
  };

  return (
    <div className="">
      <div className="toast-container">
        {toasts.map(({ id, message, color }) => {
          return (
            <div
              className="toast"
              style={{
                background: color,
              }}
            >
              {message}
              <span onClick={() => handleHideToast(id)}>X</span>
            </div>
          );
        })}
      </div>
      <div className="toast-button">
      <button onClick={() => handleAdd("Success", "green")}>
        Success toast
      </button>
      <button onClick={() => handleAdd("Warning", "orange")}>
        Warning toast
      </button>
      <button onClick={() => handleAdd("Info", "blue")}>Info toast</button>
      <button onClick={() => handleAdd("Error", "red")}>Error toast</button>
    </div>
    </div>
  );
}
