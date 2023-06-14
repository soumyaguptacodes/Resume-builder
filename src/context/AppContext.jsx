import { useContext, createContext, useState } from "react"

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export function AppContextProvider({ children }) {
  const [list, setList] = useState([
    { id: 0, title: "Profile Summary", active: true },
    { id: 1, title: "Academic  ", active: true },
    { id: 2, title: "Internship Experiece", active: true },
    { id: 3, title: "Work Experience", active: true },
    { id: 4, title: "Project", active: true },
    { id: 5, title: "Certifications", active: true },
    { id: 6, title: "Leadership Program", active: true },
    { id: 7, title: "Extracurricular", active: true },
    { id: 8, title: "Education", active: true },
    { id: 9, title: "E-mail Id", active: true },
  ])

  return (
    <>
      <AppContext.Provider
        value={{
          list,
          setList,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  )
}

export const useAppContext = () => useContext(AppContext)
