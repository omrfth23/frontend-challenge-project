import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Profile = () => {
  const { data } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">{data.profile.title}</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6">{data.profile.profileTitle}</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b dark:border-gray-700 pb-2">
              <span className="font-semibold text-gray-900 dark:text-white">{data.profile.birthDate}</span>
              <span className="text-gray-600 dark:text-gray-300">{data.profile.birthDateValue}</span>
            </div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-2">
              <span className="font-semibold text-gray-900 dark:text-white">{data.profile.city}</span>
              <span className="text-gray-600 dark:text-gray-300">{data.profile.cityValue}</span>
            </div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-2">
              <span className="font-semibold text-gray-900 dark:text-white">{data.profile.education}</span>
              <span className="text-gray-600 dark:text-gray-300">{data.profile.educationValue}</span>
            </div>
            <div className="flex justify-between border-b dark:border-gray-700 pb-2">
              <span className="font-semibold text-gray-900 dark:text-white">{data.profile.role}</span>
              <span className="text-gray-600 dark:text-gray-300">{data.profile.roleValue}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6">{data.profile.aboutTitle}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {data.profile.aboutText1}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {data.profile.aboutText2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;