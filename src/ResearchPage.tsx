import React from 'react';

const ResearchPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Generalized Anxiety Disorder (GAD) Prediction System from Social Media Data</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          This research explores leveraging machine learning on social media data to predict Generalized Anxiety Disorder (GAD), a prevalent yet often underdiagnosed condition. Traditional methods are subjective and costly, while digital footprints offer a non-intrusive, scalable approach.
        </p>
        <p className="mb-4">
          The project utilizes social media text to identify linguistic and behavioral cues associated with GAD, aiming to develop a system capable of predicting symptoms using a Support Vector Machine (SVM) model. Key components include data preprocessing, NLP, feature extraction, and classification. An API and React frontend facilitate real-time prediction and user interaction.
        </p>
        <p>
          Ethical considerations like privacy and data anonymization are emphasized. The system aims to support mental health professionals, researchers, and individuals through early detection and intervention, contributing to mental health informatics by demonstrating a low-cost, accessible tool using digital behavior as a diagnostic asset.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1.1 Background Literature</h2>
        <p className="mb-4">
          Mental health is globally significant, with GAD being common but often misdiagnosed. Digital platforms provide insights into psychological states through textual data. NLP is used to extract features like sentiment, emotion, and linguistic patterns from social media. Studies show language models can predict depressive symptoms and analyze anxiety patterns. Linguistic features like future-tense verbs and catastrophizing are key GAD indicators.
        </p>
        <p>
          Machine learning, particularly SVM, Naive Bayes, Random Forest, Decision Trees, and Deep Learning models, is used for psychological state classification. SVM was chosen for its balance of performance and interpretability in high-dimensional text data. Temporal and sentiment dynamics analysis are crucial as GAD evolves over time. Biofeedback integration is a future possibility for enhanced accuracy. Ethical AI principles are vital, focusing on transparency, user consent, and data anonymization.
        </p>
      </section>

       <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1.2 Research Gap</h2>
        <p className="mb-4">
          Existing research often focuses broadly on depression or general sentiment, with limited attention specifically on GAD detection using social media. Many deep learning approaches lack interpretability, which is crucial for mental health applications. Few studies utilize SVM, which offers accuracy and explainability.
        </p>
        <p className="mb-4">
          Notable gaps include the lack of integration of temporal behavior and sentiment dynamics, and minimal research incorporating biofeedback insights. Practical systems often lack real-time capabilities, user-friendly interfaces, and accessibility, while ethical considerations are often under-addressed.
        </p>
         <p>
          This research addresses these gaps with an interpretable, integrated, and accessible GAD prediction system combining SVM, sentiment/temporal analysis, API integration, and a React frontend.
        </p>
      </section>

       <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1.3 Research Problem</h2>
        <p className="mb-4">
          GAD is common but underdiagnosed due to subjective assessments, stigma, and limited access to professionals. Social media offers a rich data source to observe psychological states through language, but a critical gap exists in deploying structured, reliable systems specifically for GAD detection.
        </p>
        <p className="mb-4">
          Most research overlooks GAD-specific markers, focusing on depression. Advanced deep learning models lack interpretability and require large datasets. Tools often fail to balance accuracy, interpretability, and user accessibility. Current systems neglect temporal behavior changes and practical implementation with real-time APIs and user interfaces, while ethical considerations are often overlooked.
        </p>
         <p>
          This research proposes an end-to-end system using SVM, enhanced with temporal/sentiment analysis, delivered through a secure API and React frontend, filling research and implementation gaps in scalable, explainable, and ethical GAD prediction.
        </p>
      </section>

       <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1.4 Research Objectives</h2>
        <h3 className="text-xl font-semibold mb-2">1.4.1 Main Objective</h3>
        <p className="mb-4">
          To develop an intelligent, explainable, and accessible system for accurately predicting GAD based on social media activity using SVM and text-based behavioral patterns. The goal is to bridge traditional diagnostics and digital behavior for scalable, data-driven early detection and awareness.
        </p>
        <h3 className="text-xl font-semibold mb-2">1.4.2 Specific Objectives</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Collect and preprocess social media text data.</li>
          <li>Identify linguistic and behavioral markers for GAD.</li>
          <li>Develop an SVM-based classification model.</li>
          <li>Implement temporal behavior and sentiment dynamics analysis.</li>
          <li>Design and deploy a backend API for real-time prediction.</li>
          <li>Build a user-friendly frontend interface using React.</li>
          <li>Evaluate system performance using standard metrics.</li>
          <li>Address ethical concerns regarding data privacy and informed use.</li>
        </ul>
      </section>

       <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Requirement Gathering and Analysis</h2>
        <p className="mb-4">
          Both primary (field visits, interviews) and secondary (document analysis) data collection methods were used. Field visits provided insights into real-world anxiety expression on digital platforms and confirmed the need for automated detection due to stigma.
        </p>
        <p className="mb-4">
          Dataset collection involved merging three publicly available datasets (Reddit, Twitter, DAIC-WOZ), totaling over 12,000 balanced entries after preprocessing and standardization. Document analysis reviewed research papers on ML in mental health, NLP techniques, and ethical frameworks, guiding feature engineering, algorithm selection, and ethical design.
        </p>
      </section>

       <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2.1 Feasibility Study</h2>
        <p className="mb-4">
          A detailed feasibility study assessed technical, economic, operational, and ethical dimensions.
        </p>
        <h3 className="text-xl font-semibold mb-2">2.1.1 Technical Feasibility</h3>
        <p className="mb-4">
          Feasible using widely adopted technologies: Python libraries (scikit-learn, NLTK, spaCy) for ML/NLP, Flask/FastAPI for the backend API, and React for the frontend. SVM is lightweight, requiring modest computing resources.
        </p>
        <h3 className="text-xl font-semibold mb-2">2.1.2 Economic Feasibility</h3>
        <p className="mb-4">
          Strong for academic/research use due to open-source tools and minimal hardware needs. Potential for cost savings in early mental health intervention.
        </p>
         <h3 className="text-xl font-semibold mb-2">2.1.3 Operational Feasibility</h3>
        <p className="mb-4">
          User-friendly, accessible, and responsive frontend. Modular backend allows easy updates. Lightweight architecture supports long-term use with minimal overhead.
        </p>
         <h3 className="text-xl font-semibold mb-2">2.1.4 Ethical and Legal Feasibility</h3>
        <p className="mb-4">
          Core component: avoids collecting PII, uses anonymized/public data, provides transparency, follows ethical AI practices. Adaptable to data protection laws like GDPR.
        </p>
      </section>

       <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2.2 System Designs</h2>
        <h3 className="text-xl font-semibold mb-2">2.2.1 Overall System Diagram</h3>
        <p className="mb-4">
          Comprises three layers:
        </p>
         <ul className="list-disc list-inside mb-4">
          <li>Frontend (ReactJS): User input, displays results, sends requests to API.</li>
          <li>Backend/API (Flask/FastAPI): Receives input, loads model, preprocesses, classifies, returns result.</li>
          <li>Machine Learning Model (SVM): Trained on merged datasets, stored using joblib.</li>
        </ul>
         <h3 className="text-xl font-semibold mb-2">2.2.2 Design Diagrams</h3>
         <h4 className="text-lg font-semibold mb-2">2.2.2.1 Use Case Diagram</h4>
        <p className="mb-4">
          Single user role (End User) interacts via UI to input text, submit for analysis, view predicted result, and view disclaimer.
        </p>
        <h4 className="text-lg font-semibold mb-2">2.2.3 Component System Diagram (Prediction Logic)</h4>
        <p className="mb-4">
          Focuses on prediction logic: Text Preprocessing Module (cleans input), Feature Extraction Module (TF-IDF vectorization), Prediction Engine (loads SVM, classifies, returns confidence).
        </p>
      </section>

       <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">03. Methodology</h2>
        <p className="mb-4">
          Structured approach integrating computational and psychological principles. Data acquisition from Reddit, Twitter, and DAIC-WOZ (over 12,000 entries). Rigorous preprocessing pipeline: lowercase, remove noise, tokenization, lemmatization, stop word removal using NLTK and spaCy.
        </p>
        <p className="mb-4">
          Feature extraction using TF-IDF vectorization to quantify word importance. Classification with SVM (linear kernel). Dataset split (80:20 train/test). Hyperparameter tuning with GridSearchCV. Evaluation metrics: accuracy, precision, recall, F1-score.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">04. Implementation and Testing</h2>
        <p className="mb-4">
          End-to-end pipeline: ML model integrated into responsive web app. Trained SVM model serialized using joblib. Backend using Flask with a /predict endpoint: accepts POST requests, preprocesses input, classifies, returns JSON result (prediction, confidence, disclaimer).
        </p>
        <p className="mb-4">
          Frontend using React.js: user input, sends to Flask via Axios, displays prediction dynamically with confidence and non-clinical disclaimer. UI designed to be clean, intuitive, mobile-responsive.
        </p>
        <p className="mb-4">
          Testing: Model-level (SVM performance on test set, metrics: accuracy 87.2%, F1-score 0.87, confusion matrix). System-level (unit testing on functions, integration testing between frontend/backend). User testing (feedback on usability, clarity, handling of special characters/languages).
        </p>
      </section>

    </div>
  );
};

export default ResearchPage; 