import React, { useState, useEffect } from "react";

const MentalHealthInfo = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData.mental_health_information);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        <p>Failed to load mental health information: {error}</p>
      </div>
    );
  }

  const MindfulnessSection = ({ mindfulness }) => (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Mindfulness</h2>
      <p className="mb-4 text-gray-700">{mindfulness.description}</p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Benefits</h3>
        <ul className="list-disc pl-6 space-y-2">
          {mindfulness.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-600">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Techniques</h3>
        <ul className="space-y-4">
          {mindfulness.techniques.map((technique, index) => (
            <li key={index} className="bg-gray-50 p-4 rounded-md">
              <span className="font-medium text-gray-800">
                {technique.name}:{" "}
              </span>
              <span className="text-gray-600">{technique.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  const YogaSection = ({ yoga }) => (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Yoga</h2>
      <p className="mb-4 text-gray-700">{yoga.description}</p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Benefits</h3>
        <ul className="list-disc pl-6 space-y-2">
          {yoga.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-600">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Styles</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {yoga.styles.map((style, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-800 mb-2">{style.name}</h4>
              <p className="text-gray-600">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const OtherTopicsSection = ({ topics }) => (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Other Topics</h2>
      <div className="space-y-6">
        {topics.map((topic, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {topic.name}
            </h3>
            <p className="mb-4 text-gray-700">{topic.description}</p>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2">
                {topic.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-600">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100">
      <MindfulnessSection mindfulness={data.mindfulness} />
      <YogaSection yoga={data.yoga} />
      <OtherTopicsSection topics={data.other_topics} />
    </div>
  );
};

export default MentalHealthInfo;
