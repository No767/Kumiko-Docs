import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Built on a Monolith',
    Svg: require('@site/static/undraw_assets/building_blocks.svg').default,
    description: (
      <>
        Kumiko is built on top of Rin, which includes integrations with 15+ services, from MangaDex to YouTube, all out of the box. 
        Read your Twitch chat from a live feed, to finding your favorite manga or anime has not been easier than ever. 
      </>
    ),
  },
  {
    title: 'Full of Exciting Features',
    Svg: require('@site/static/undraw_assets/features.svg').default,
    description: (
      <>
        Kumiko includes a lot of features, such as a fully integrated economy system, to a full-fledged web dashboard, and many many more!
        You'll never feel bored when using Kumiko ever again!
      </>
    ),
  },
  {
    title: 'Completely Open Source and Free',
    Svg: require('@site/static/undraw_assets/git.svg').default,
    description: (
      <>
        Unlike many popular Discord bots, Kumiko has been built to be free and open source. Kumiko is licensed under Apache-2.0.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
