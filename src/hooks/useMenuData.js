import { useState, useEffect } from "react";

const useMenuData = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("menu.json");
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData().catch((error) => {
      console.error("Error fetching menu data:", error);
    });
  }, []);

  return menuData;
};

export default useMenuData;
