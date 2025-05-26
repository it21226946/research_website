import React from 'react';
import { Brain, Database, Search, Beaker } from 'lucide-react';

const ResearchItem: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
      <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg text-blue-700 mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Research: React.FC = () => {
  const researchItems = [
    {
      icon: Search,
      title: 'Problem Statement',
      description:
        'Developing a system to predict Generalized Anxiety Disorder (GAD) through social media data analysis using machine learning techniques.',
    },
    {
      icon: Beaker,
      title: 'Methodology',
      description:
        'Utilizing Logistic Regression models combined with natural language processing for analyzing social media text patterns indicative of GAD.',
    },
    {
      icon: Database,
      title: 'Data Collection',
      description:
        'Gathering data from Reddit, Twitter, and DAIC-WOZ dataset to create a comprehensive training set for GAD prediction.',
    },
    {
      icon: Brain,
      title: 'Analysis Techniques',
      description:
        'Implementing text preprocessing, TF-IDF vectorization, and Logistic Regression classification to identify anxiety-related behavioral patterns.',
    },
  ];

  const researchObjectives = [
    'Collect and preprocess social media text data for GAD analysis',
    'Identify linguistic and behavioral markers associated with GAD',
    'Develop a Logistic Regression-based classification model for GAD prediction',
    'Design and deploy a backend API for real-time prediction',
    'Build a user-friendly frontend interface using React',
    'Evaluate system performance using standard metrics',
    'Address ethical concerns regarding data privacy and informed use',
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Background Literature Section */}
        <div className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Background Literature</h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          <div className="space-y-6 text-gray-700">
            <p>
              Generalized Anxiety Disorder (GAD) is widespread but often undiagnosed due to stigma and reliance on self-reports. Digital platforms offer rich behavioral data for early detection via artificial intelligence (AI) and natural language processing (NLP), which identify linguistic markers like negative sentiment, repetitive worry, and future-tense language.
            </p>
            <p>
              Machine learning models—especially Logistic regression—are chosen for their accuracy and interpretability in classifying anxiety-related text. Temporal and sentiment analyses enhance detection by tracking symptom evolution over time. This research prioritizes ethical AI, transparency, user consent, and privacy, advancing scalable, explainable, and responsible mental health monitoring tools.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Overview</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            This research explores the intersection of technology and psychology by leveraging machine learning 
            techniques to predict the presence of GAD from social media data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchItems.map((item, index) => (
            <ResearchItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Research Objectives Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Research Objectives</h3>
          <div className="grid grid-cols-1 gap-6">
            {researchObjectives.map((objective, index) => (
              <div key={index} className="flex items-start p-4 bg-orange-50 rounded-lg shadow-sm">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-orange-600 text-white font-bold text-lg mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 flex-1">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Methodology</h3>
          <div className="space-y-6 text-gray-700">
            <p>
              This research develops a machine learning system to detect Generalized Anxiety Disorder (GAD) using social media text. Data is collected from three sources: Reddit (r/anxiety, r/mentalhealth), Twitter (hashtags #anxiety, #mentalhealth), and a clinically annotated dataset for validation, yielding over 12,000 text entries. The methodology includes data preprocessing—lowercasing, removing non-textual elements (links, emojis, handles, punctuation), tokenization, lemmatization, and stopword removal—using NLTK and spaCy for linguistic accuracy. Feature extraction applies Term Frequency–Inverse Document Frequency (TF-IDF) to highlight anxiety-indicative terms, converting text into numerical vectors. For classification, a Support Vector Machine (SVM) with a linear kernel is chosen for its effectiveness in high-dimensional, binary text classification. The dataset is split 80:20 for training and testing, with hyperparameters optimized via GridSearchCV and cross-validation. Model performance is evaluated using accuracy, precision, recall, and F1-score to ensure robust prediction. The approach emphasizes both analytical rigor and ethical considerations, such as data privacy and model explainability, to create a scalable, accessible mental health tool for early GAD detection.
            </p>
            {/* System Architecture Diagram */}
            <div className="mt-8 flex justify-center">
              <img 
                src="/images/diagram.png" 
                alt="System Architecture Diagram" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;