import React from 'react';
import { bool } from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'common/constants/api';
import { mapStringsToSelectOptions } from 'common/utils/array-utils';
import Select from 'components/Form/Select/Select';
import styles from './_steps.css';

const programmingLanguageOptions = [
  'JavaScript',
  'Python',
  'Java',
  'C# / .NET',
  'Ruby',
  'C',
  'Go',
  'Swift',
  'Kotlin',
];

const disciplineOptions = [
  'Web Developer',
  'Front-End Developer',
  'Back-End Developer',
  'Full-Stack Developer',
  'Mobile: iOS',
  'Mobile: Android',
  'Information Technology / System Administration',
  'Cyber Security',
  'Data Science',
  'Designer',
  'Product Management',
  'Agile / Scrum Management',
];

class Technology extends React.Component {
  static propTypes = {
    isSubmitting: bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static validationSchema = Yup.object().shape({
    programmingLanguages: Yup.array(),
    disciplines: Yup.array(),
  });

  static initialValues = {
    programmingLanguages: [],
    disciplines: [],
  };

  static submitHandler = async values => {
    console.log('Values at Technology:', values);
    // await updateUser(values);
  };

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <h2 className={styles.row}>Technology</h2>

        <div className={styles.row}>
          <Field
            className={styles.fullWidth}
            name="programmingLanguages"
            label="Programming Languages That Interest You"
            component={Select}
            isMulti
            options={[
              {
                value: '',
                label: '-- Select One --',
              },
              ...mapStringsToSelectOptions(programmingLanguageOptions),
              // TODO: investigate creatable
            ]}
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.row}>
          <Field
            className={styles.fullWidth}
            name="disciplines"
            label="Disciplines That Interest You"
            component={Select}
            isMulti
            options={[
              {
                value: '',
                label: '-- Select One --',
              },
              ...mapStringsToSelectOptions(disciplineOptions),
              // TODO: investigate creatable
            ]}
            disabled={isSubmitting}
          />
        </div>
      </>
    );
  }
}

export default Technology;
