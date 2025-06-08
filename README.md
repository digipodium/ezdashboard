# Digipodium EzDashboard

[![Website](https://img.shields.io/badge/Website-Docs-green)](https://ezdashboard.digipodium.com/docs/gettingStarted) &nbsp; &nbsp; &nbsp; [![NPM](https://img.shields.io/npm/v/@digipodium/ezdashboard)](https://www.npmjs.com/package/@digipodium/ezdashboard) &nbsp; &nbsp; &nbsp; [![GitHub](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/digipodium/ezdashboard) &nbsp; &nbsp; &nbsp; [![Instagram](https://img.shields.io/badge/Instagram-Follow-lightgray)](https://www.instagram.com/digipodium_official/?hl=en)

---

## Digipodium's React Library for Building Dashboards

**EzDashboard** is a powerful **React library** crafted to streamline the creation of professional dashboards. It helps you effortlessly build visually appealing and data-driven interfaces for informed decision-making. By leveraging pre-built components and a flexible design system, EzDashboard empowers developers of all skill levels to rapidly prototype and build exceptional dashboards.

![Dashboard](https://res.cloudinary.com/daxjco9eg/image/upload/v1749380888/dashboard_iw5dpu.png)
---

## Key Benefits

* **Reduced Development Time:** Building dashboards from scratch can be time-consuming. EzDashboard offers a comprehensive library of ready-made components, letting you focus on data integration and customization instead of reinventing the wheel.

* **Enhanced Consistency:** Maintaining a consistent visual style across your application suite can be challenging. EzDashboard enforces a unified design language, ensuring your dashboards seamlessly integrate with your overall UI.

* **Improved User Experience:** EzDashboard prioritizes user experience with interactive and responsive components that adapt effortlessly to different screen sizes and devices. This allows your users to access valuable insights seamlessly.

* **Simplified Customization:** While EzDashboard provides a polished default style, it also offers extensive customization options. You can easily tailor the appearance of your dashboards to match your brand identity or unique needs.

---

## Installation

To install EzDashboard, run the following command in your terminal:

```bash
npm i @digipodium/ezdashboard
```

---

## Documentation

You can find the comprehensive documentation for `@digipodium/ezdashboard` on our [website](https://ezdashboard.digipodium.com/).

Check out the [Getting Started](https://ezdashboard.digipodium.com/docs/gettingStarted) page for a quick overview.

The documentation is organized into several sections:

* [Getting Started](https://ezdashboard.digipodium.com/docs/gettingStarted)
* [API Reference](https://ezdashboard.digipodium.com/docs/api-reference)
* [Contribution Guidelines](https://ezdashboard.digipodium.com/docs/contribution)
* [Components](https://ezdashboard.digipodium.com/docs/component)
* [FAQs & Troubleshooting](https://ezdashboard.digipodium.com/docs/Faqs-troubleshooting)
* [License & Legal](https://ezdashboard.digipodium.com/docs/License-Legal)
* [Performance Optimization](https://ezdashboard.digipodium.com/docs/performance-optimization)

---

## Examples

We have several examples available on our [website](https://ezdashboard.digipodium.com/docs/example/alert), including the **Alert** component. Here is a basic example to help you get started:

```bash
import { Alert } from '@digipodium/ezdashboard';

const Dashboard = () => {
  return (
    <Alert title="Alert" description="Alert message" />
  );
};

export default Dashboard;
```

#### Output Preview:
![output](https://ezdashboard.digipodium.com/image/alert2.png)

---

## Components-List

* [Alert](https://ezdashboard.digipodium.com/docs/component/alert)
* [StatCard](https://ezdashboard.digipodium.com/docs/component/statcard)
* [Table](https://ezdashboard.digipodium.com/docs/component/table)
* [ProgressBar](https://ezdashboard.digipodium.com/docs/component/progressbar)
* [Button](https://ezdashboard.digipodium.com/docs/component/button)
* [Avatar](https://ezdashboard.digipodium.com/docs/component/avatar)
* [Link](https://ezdashboard.digipodium.com/docs/component/link)
* [TextInput](https://ezdashboard.digipodium.com/docs/component/textinput)
* [CheckBox](https://ezdashboard.digipodium.com/docs/component/checkbox)
* [Radio](https://ezdashboard.digipodium.com/docs/component/radio)
* [Stepper](https://ezdashboard.digipodium.com/docs/component/stepper)
* [ScatterPlot](https://ezdashboard.digipodium.com/docs/component/scatterplot)
* [LineChart](https://ezdashboard.digipodium.com/docs/component/linechart)
* [ScatterPlot](https://ezdashboard.digipodium.com/docs/component/scatterplot)
* [Bump](https://ezdashboard.digipodium.com/docs/component/bump)
* [HeatMap](https://ezdashboard.digipodium.com/docs/component/heatmap)
* [PieChart](https://ezdashboard.digipodium.com/docs/component/piechart)

---

## License

**EzDashboard** is licensed under the terms outlined in the [License & Legal section of our documentation](https://ezdashboard.digipodium.com/docs/License-Legal).

---

## Few More Examples

We have several examples available on our [website](https://ezdashboard.digipodium.com/docs/example/alert), including the **PieChart** component. Here is a basic example to help you get started:

```bash
import { PieChart } from '@digipodium/ezdashboard';

const Dashboard = () => {
  const actualPieData = [
    {
      id: "JavaScript",
      label: "JavaScript",
      value: 350,
      color: "hsl(20, 70%, 50%)"
    },
    {
      id: "Python",
      label: "Python",
      value: 280,
      color: "hsl(100, 70%, 50%)"
    },
    {
      id: "Java",
      label: "Java",
      value: 190,
      color: "hsl(200, 70%, 50%)"
    },
    {
      id: "C#",
      label: "C#",
      value: 120,
      color: "hsl(300, 70%, 50%)"
    },
    {
      id: "Go",
      label: "Go",
      value: 60,
      color: "hsl(40, 70%, 50%)"
    }
  ];

  return (
    <div>
      <div className="mb-5" style={{ height: '400px', width: '100%' }}>
        <PieChart data={actualPieData} />
      </div>
    </div>
  );
};

export default Dashboard;
```

#### Output Preview:
![output](http://localhost:3000/imageNew/newPieChart.png)
