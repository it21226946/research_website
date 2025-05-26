import React, { useState } from 'react';
import { FileText, Download, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Publications: React.FC = () => {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedPaper(expandedPaper === index ? null : index);
  };

  const papers = [
    {
      title: 'Detecting Generalized Anxiety Disorder Using NLP and Machine Learning',
      authors: 'H.M. Gayasha Nethmina',
      journal: 'International Conference on Advanced Computing',
      year: '2025',
      abstract:
        'This paper presents a machine learning approach for detecting Generalized Anxiety Disorder (GAD) by analyzing social media text data. Utilizing Natural Language Processing (NLP) techniques such as sentiment analysis, the study explores linguistic patterns indicative of GAD. We employ a Logistic Regression model for classification, evaluating its performance using key metrics like accuracy, precision, recall, F1-score, and ROC AUC. The research highlights the potential of leveraging social media data and machine learning for early detection and contributes to the development of scalable and accessible mental health screening tools.',
      keywords: [
        'Generalized Anxiety Disorder (GAD)',
        'Natural Language Processing (NLP)',
        'Machine Learning',
        'Social Media',
        'Sentiment Analysis',
        'Logistic regression',
      ],
    },
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Research papers and publications related to my academic work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div
                className="p-6 cursor-pointer flex justify-between items-start"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{paper.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {paper.authors} • {paper.journal} • {paper.year}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {paper.keywords.map((keyword, kidx) => (
                        <span
                          key={kidx}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  {expandedPaper === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>

              <div
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedPaper === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Abstract</h4>
                  <p className="text-gray-600 text-sm mb-4">{paper.abstract}</p>
                  
                  <div className="flex space-x-3">
                    <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <Download className="h-4 w-4 mr-1" />
                      Download PDF
                    </button>
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Online
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Research Resources</h3>
          <ul className="space-y-3">
            <li className="flex">
              <Download className="h-5 w-5 text-blue-700 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Research Data Sets (ZIP, 24MB)</span>
            </li>
            <li className="flex">
              <Download className="h-5 w-5 text-blue-700 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Supplementary Materials (PDF, 3.2MB)</span>
            </li>
            <li className="flex">
              <ExternalLink className="h-5 w-5 text-blue-700 mr-3 flex-shrink-0" />
              <span className="text-gray-700">GitHub Repository with Implementation Code</span>
            </li>
            <li className="flex">
              <ExternalLink className="h-5 w-5 text-blue-700 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Interactive Demo of Research Findings</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Publications;