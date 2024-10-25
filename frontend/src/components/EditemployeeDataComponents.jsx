export const handleDeleteDependent = (index, employee, setEmployee, setDeletedDependents) => {
    const dependent = employee.dependents[index];
    setDeletedDependents((prevDeleted) => [...prevDeleted, dependent]);
    const updatedDependents = employee.dependents.filter((_, i) => i !== index);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      dependents: updatedDependents,
    }));
  };


  export const handleDeleteEmergencyContact = (index, employee, setEmployee, setDeletedEmergencyContacts) => {
    const contact = employee.emergency_contacts[index];
    setDeletedEmergencyContacts((prevDeleted) => [...prevDeleted, contact]);
    const updatedEmergencyContacts = employee.emergency_contacts.filter((_, i) => i !== index);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      emergency_contacts: updatedEmergencyContacts,
    }));
  };