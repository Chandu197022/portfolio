export const projects = [
  {
    id: 'smart-parking',
    title: 'Smart Parking System',
    short: 'IoT-based solution to monitor and manage parking availability efficiently.',
    description: `
      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Overview</h3>
      <p>This project focuses on developing an IoT-enabled Smart Parking System to reduce manual parking hassles. It efficiently monitors available parking spaces and provides real-time updates to users.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Technical Implementation</h3>
      <p>The system integrates <strong>IR sensors</strong> for vehicle detection and <strong>NodeMCU</strong> for wireless data transmission. The occupancy data is sent to <strong>Adafruit IO</strong> cloud where it is visualized in real-time dashboards. Servo motors are used for gate control automation.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Impact</h3>
      <p>This system minimizes time spent searching for parking, reduces congestion, and enhances user convenience by providing live slot availability through IoT.</p>
    `,
    tools: ['NodeMCU', 'IR Sensors', 'Servo Motors', 'Adafruit IO', 'IoT', 'Cloud'],
    image: 'https://www.mokosmart.com/wp-content/uploads/2022/03/Smart-parking-system-using-IoT.webp'
  },

  {
    id: 'ecg-anomaly',
    title: 'Electrolyte Anomaly Detection (ECG)',
    short: 'ML model to identify electrolyte imbalances using ECG data.',
    description: `
      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Overview</h3>
      <p>This project detects <strong>electrolyte anomalies</strong> like potassium or sodium imbalance through analysis of ECG signals using machine learning techniques.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Technical Implementation</h3>
      <p>Using <strong>Python</strong>, ECG signals were preprocessed through noise filtering and feature extraction. Models such as <strong>Random Forest</strong> and <strong>XGBoost</strong> were trained on patient ECG data to classify electrolyte levels. Visualization was performed using <strong>Matplotlib</strong> for interpretability.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Outcome</h3>
      <p>The system achieved high accuracy in identifying abnormal electrolyte patterns, contributing to early medical diagnosis and healthcare automation.</p>
    `,
    tools: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
    image: 'https://images.pexels.com/photos/6203473/pexels-photo-6203473.jpeg'
  },

  {
    id: 'solar-dashboard',
    title: 'Solar Data Logger Dashboard',
    short: 'Comprehensive dashboard for solar energy monitoring and optimization.',
    description: `
      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Overview</h3>
      <p>A dashboard application designed to monitor solar power generation, consumption patterns, and efficiency KPIs using real-time inverter logs.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Technical Implementation</h3>
      <p>The system collects solar plant data using <strong>Python</strong> and stores it in <strong>SQL</strong> databases. Insights are visualized using <strong>Power BI</strong> and <strong>Plotly</strong>, helping optimize energy usage and identify losses.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Impact</h3>
      <p>Enabled plant engineers to monitor energy yield and efficiency, improving solar generation tracking by 30% and facilitating preventive maintenance.</p>
    `,
    tools: ['Python', 'SQL', 'Power BI', 'Plotly'],
    image: 'https://grafana.com/api/dashboards/13295/images/9219/image'
  },

  {
    id: 'portfolio-site',
    title: 'Personal Portfolio Website',
    short: 'Responsive React + Tailwind portfolio with animations and routing.',
    description: `
      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Overview</h3>
      <p>This portfolio website showcases my projects, experience, and skills using a sleek, modern UI built with React and TailwindCSS.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Features</h3>
      <p>Includes dynamic project pages, smooth scroll navigation, and animated transitions via <strong>Framer Motion</strong>. Fully responsive for all devices.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Goal</h3>
      <p>Serves as my digital identity for recruiters, demonstrating my web development and UI/UX design proficiency.</p>
    `,
    tools: ['React', 'Tailwind', 'Framer Motion'],
    image: 'https://img.freepik.com/premium-photo/workspace-black-leather-top-table-creative-designer-photographer-copy-space_67155-790.jpg?semt=ais_hybrid&w=740&q=80'
  },

  {
    id: 'weather-app',
    title: 'Dynamic Weather Web App',
    short: 'Real-time weather forecasts and visual data analytics.',
    description: `
      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Overview</h3>
      <p>A web-based application that provides live weather updates, forecasts, and graphical data visualization for global cities.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Technical Details</h3>
      <p>Built using <strong>React.js</strong> and integrated with <strong>OpenWeather API</strong> to fetch live weather data. Implemented dynamic charts using <strong>Chart.js</strong> for intuitive visualization of temperature and humidity trends.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Highlights</h3>
      <p>Includes search functionality, responsive UI, and dark mode support for a professional modern experience.</p>
    `,
    tools: ['React', 'OpenWeather API', 'Chart.js'],
    image: 'https://cdn.jim-nielsen.com/ios/512/weather-2017-06-19.png?rf=1024'
  },

  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction (Major DS Project)',
    short: 'Machine Learning project to predict customer churn and retention strategies.',
    description: `
      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Overview</h3>
      <p>A data science project aimed at predicting customer churn in a telecom dataset using machine learning models and dashboard visualization.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Implementation</h3>
      <p>Performed data cleaning, feature engineering, and trained models using <strong>Logistic Regression</strong> and <strong>Random Forest</strong>. Dashboard insights created using <strong>Power BI</strong> helped visualize churn factors such as tenure, service usage, and billing cycle.</p>

      <h3 class='text-xl font-semibold text-blue-400 mt-4'>Impact</h3>
      <p>The project offered actionable insights to reduce churn by 20% through better targeting of high-risk customers.</p>
    `,
    tools: ['Python', 'scikit-learn', 'Pandas', 'Power BI'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sVZ7n0fsqorZI8jE4EswKSN-Fk4fL-8ZDg&s'
  }
];
