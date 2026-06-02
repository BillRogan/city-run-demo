import type { Ref } from "vue"

class NavigationElement {
  name: string
  section: Ref<HTMLElement | null>

  constructor(name: string, section: Ref<HTMLElement | null>) {
    this.name = name
    this.section = section
  }
}

export default NavigationElement
