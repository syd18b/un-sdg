import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {
  static get tag() {
    return "un-sdg"; // Define the custom element tag
  }

  constructor() {
    super();
    // Initialize properties with default values
    this.goal = "circle";
    this.imgSrc = "./lib/svgs/circle.png";
    this.width = "254px";
    this.height = "254px";
    this.label = "";
    this.loading = "lazy";
    this.fetchPriority = "low";
    this.colorOnly = false;
    this.isImageVisible = true;
    this.color = "";
  }
  // Define properties for the custom element with their types

  static get properties() {
    return {
      goal: { type: String },
      imgSrc: { type: String },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String },
      fetchPriority: { type: String },
      colorOnly: { type: Boolean },
      isImageVisible: { type: Boolean },
      color: { type: String },
    };
  }
  // Define CSS styles for the custom element
  static get styles() {
    return css`
      :host {
        display: block;
        width: var(--width, 254px);
        height: var(--height, 254px);
        background-color: white;
      }
      .svg-wrapper {
        padding: 0;
        margin: 0;
        width: 256px;
        height: 256px;
      }
      img {
        width: 256px;
        height: 256px;
      }
    `;
  }

  // Update styles and properties based on changes
  updated(changedProperties) {
    if (changedProperties.has("width")) {
      this.style.setProperty("--width", this.width);
    }
    if (changedProperties.has("height")) {
      this.style.setProperty("--height", this.height);
    }
    if (changedProperties.has("goal")) {
      this.updateProperties();
    }
    if (changedProperties.has("colorOnly")) {
      this.isImageVisible = !this.colorOnly; // Toggle image visibility
    }
    if (changedProperties.has("loading")) {
      this.loading = this.getAttribute("loading") || this.loading;
    }
    if (changedProperties.has("fetchPriority")) {
      this.fetchPriority =
        this.getAttribute("fetchPriority") || this.fetchPriority;
    }
  }

  // Update image source, label, and background color based on the goal
  updateProperties() {
    const goals = {
      circle: {
        img: "../lib/svgs/circle.png",
        label: "Sustainable developments logo",
        color: "white",
      },
      all: {
        img: "../lib/svgs/all.svg",
        label: "All goals",
        color: "white",
      },
      1: {
        img: "../lib/svgs/goal-1.svg",
        label: "Goal 1: No poverty",
        color: "rgb(235, 28, 44)",
      },
      2: {
        img: "../lib/svgs/goal-2.svg",
        label: "Goal 2: Zero hunger",
        color: "rgb(210, 160, 42)",
      },
      3: {
        img: "../lib/svgs/goal-3.svg",
        label: "Goal 3: Good health and well-being",
        color: "rgb(44, 155, 72)",
      },
      4: {
        img: "../lib/svgs/goal-4.svg",
        label: "Goal 4: Quality education",
        color: "rgb(194, 31, 51)",
      },
      5: {
        img: "../lib/svgs/goal-5.svg",
        label: "Goal 5: Gender equality",
        color: "rgb(239, 64, 42)",
      },
      6: {
        img: "../lib/svgs/goal-6.svg",
        label: "Goal 6: Clean water and sanitation",
        color: "rgb(0, 173, 216)",
      },
      7: {
        img: "../lib/svgs/goal-7.svg",
        label: "Goal 7: Affordable and clean energy",
        color: "rgb(253, 183, 19)",
      },
      8: {
        img: "../lib/svgs/goal-8.svg",
        label: "Goal 8: Decent work and economic growth",
        color: "rgb(143, 23, 55)",
      },
      9: {
        img: "../lib/svgs/goal-9.svg",
        label: "Goal 9: Industry, innovation and infrastructure",
        color: "rgb(243, 109, 36)",
      },
      10: {
        img: "../lib/svgs/goal-10.svg",
        label: "Goal 10: Reduced inequalities",
        color: "rgb(224, 21, 131)",
      },
      11: {
        img: "../lib/svgs/goal-11.svg",
        label: "Goal 11: Sustainable cities and communities",
        color: "rgb(249, 157, 37)",
      },
      12: {
        img: "../lib/svgs/goal-12.svg",
        label: "Goal 12: Responsible consumption and production",
        color: "rgb(207, 141, 42)",
      },
      13: {
        img: "../lib/svgs/goal-13.svg",
        label: "Goal 13: Climate action",
        color: "rgb(72, 119, 61)",
      },
      14: {
        img: "../lib/svgs/goal-14.svg",
        label: "Goal 14: Life below water",
        color: "rgb(0, 125, 187)",
      },
      15: {
        img: "../lib/svgs/goal-15.svg",
        label: "Goal 15: Life on land",
        color: "rgb(63, 175, 73)",
      },
      16: {
        img: "../lib/svgs/goal-16.svg",
        label: "Goal 16: Peace, justice and strong institutions",
        color: "rgb(1, 85, 138)",
      },
      17: {
        img: "../lib/svgs/goal-17.svg",
        label: "Goal 17: Partnerships for the goals",
        color: "rgb(25, 54, 103)",
      },
    };
    // Retrieve the properties for the current goal
    const properties = goals[this.goal];
    if (properties) {
      this.imgSrc = properties.img;
      this.label = properties.label;
      this.color = properties.color;
    }
  }

  // Render the HTML structure of the component
  render() {
    return html`
      <div class="svg-wrapper" style="background-color: ${this.color}">
        ${this.isImageVisible
          ? html`
              <img
                src="${this.imgSrc}"
                alt="${this.label}"
                loading="${this.loading}"
                fetchpriority="${this.fetchPriority}"
              />
            `
          : ``}
      </div>
    `;
  }

  // Define the URL for HAX properties
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

// Register the custom element globally
globalThis.customElements.define(unSdg.tag, unSdg);
