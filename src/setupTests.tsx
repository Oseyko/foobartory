import { ReactElement, FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import {
  shallow,
  mount,
  configure as configureEnzyme,
  ShallowRendererProps,
  MountRendererProps,
  ShallowWrapper,
  ReactWrapper,
} from 'enzyme'
import 'jest-styled-components'

import defaultTheme from 'themes/theme'

import setupIconLibrary from './utils/setupIconLibrary'

configureEnzyme({ adapter: new Adapter() })
setupIconLibrary()

const FallbackWrapper = (({ children }: { children: ReactElement }) =>
  children) as FunctionComponent

const ThemeProviderWrapper = ({
  children,
  theme,
  wrappingComponent: Wrapper = FallbackWrapper,
}: ThemeProviderInterface) => (
  <ThemeProvider theme={theme || defaultTheme}>
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
)

type ThemeProviderInterface = {
  children?: ReactElement
  theme?: unknown
  wrappingComponent?: FunctionComponent
}

export const shallowWithTheme = (
  tree: ReactElement,
  {
    context,
    disableLifecycleMethods,
    suspenseFallback,
    wrappingComponent,
    wrappingComponentProps = {},
  }: ShallowRendererProps = {}
): ShallowWrapper =>
  shallow(tree, {
    wrappingComponent: ThemeProviderWrapper,
    wrappingComponentProps: { wrappingComponent, ...wrappingComponentProps },
    context,
    disableLifecycleMethods,
    suspenseFallback,
  })

export const mountWithTheme = (
  tree: ReactElement,
  {
    context,
    childContextTypes,
    attachTo,
    wrappingComponent,
    wrappingComponentProps = {},
  }: MountRendererProps = {}
): ReactWrapper =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
    wrappingComponentProps: { wrappingComponent, ...wrappingComponentProps },
    context,
    childContextTypes,
    attachTo,
  })
