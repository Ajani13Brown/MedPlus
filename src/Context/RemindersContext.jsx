import React, { createContext, useState, useEffect } from 'react';

export const RemindersContext = createContext();


export const RemindersProvider = ({ children }) => {
  // Retrieve reminders from local storage or set defaults
  const [reminders, setReminders] = useState(() => {
    const savedReminders = localStorage.getItem('reminders');
    return savedReminders
    // Conditional statment that checks for saved data inside of local storage otherwise sets reminders to default value of false
    // "?" for if and JSON.parse is converting the JSON data in Local Storge to string so it can be used.
      ? JSON.parse(savedReminders)
      : {
          Reminder1: { Active: false },
          Reminder2: { Active: false },
        };
  });

  // Function to update reminders and save to local storage
  const toggleReminder = (reminderKey, isActive) => {
    setReminders((prevState) => {
      const updatedReminders = {
        ...prevState,
        [reminderKey]: { Active: isActive },
      };
      // Save updated state to local storage
      localStorage.setItem('reminders', JSON.stringify(updatedReminders));
      return updatedReminders;
    });
  };

  
  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  return (
    <RemindersContext.Provider value={{ reminders, toggleReminder }}>
      {children}
    </RemindersContext.Provider>
  );
};
