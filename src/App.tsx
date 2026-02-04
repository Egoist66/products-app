import { AppRouterProvider } from './app/providers/router'
import { MantineProvider } from '@mantine/core';


function App() {
  return (
    <MantineProvider>
      <AppRouterProvider />
    </MantineProvider>
  )
}

export default App
