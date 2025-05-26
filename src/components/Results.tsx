import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface PerformanceData {
  metric: string;
  value: number;
}

interface KeyFinding {
  title: string;
  description: string;
}

const Results: React.FC = () => {
  const performanceData: PerformanceData[] = [
    { metric: 'Accuracy', value: 81 },
    { metric: 'Precision', value: 87 },
    { metric: 'Recall', value: 83 },
    { metric: 'F1 Score', value: 85 },
    { metric: 'ROC AUC', value: 87 },
  ];

  const keyFindings: KeyFinding[] = [
    {
      title: 'High Classification Accuracy',
      description: 'The Logistic Regression model achieved an impressive 81% accuracy in detecting GAD from social media text, demonstrating strong predictive capabilities.',
    },
    {
      title: 'Balanced Performance',
      description: 'With precision of 87% and recall of 83%, the model shows a good balance between identifying true positive cases and minimizing false positives.',
    },
    {
      title: 'Robust F1 Score',
      description: 'The F1 score of 85% indicates excellent harmonic mean between precision and recall, suggesting reliable overall model performance.',
    },
    {
      title: 'Strong Discriminative Power',
      description: 'The ROC AUC score of 87% demonstrates the model\'s strong ability to distinguish between GAD and non-GAD cases.',
    },
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Results</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            The model demonstrates strong performance across various evaluation metrics, 
            indicating its effectiveness in detecting GAD from social media data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Model Performance Metrics</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barSize={40}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="metric" 
                    tick={{ fill: '#4b5563' }}
                    axisLine={{ stroke: '#e5e7eb' }}
                  />
                  <YAxis 
                    domain={[0, 100]} 
                    tick={{ fill: '#4b5563' }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value}%`, 'Score']}
                    labelStyle={{ color: '#1e40af' }}
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.375rem',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="value"
                    fill="#2563eb"
                    name="Score"
                    radius={[4, 4, 0, 0]}
                    background={{ fill: '#f3f4f6' }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Key Findings</h3>
            <div className="space-y-6">
              {keyFindings.map((finding, index) => (
                <div key={index} className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {finding.title}
                  </h4>
                  <p className="text-gray-600">{finding.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Figures Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Figure 1: Confusion Matrix</h3>
            <img 
              src="/images/Figure_1.png" 
              alt="Confusion Matrix" 
              className="max-w-full h-auto rounded-lg shadow-sm object-contain"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Figure 2: ROC Curve</h3>
            <img 
              src="/images/Figure_2.png" 
              alt="ROC Curve" 
              className="max-w-full h-auto rounded-lg shadow-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;