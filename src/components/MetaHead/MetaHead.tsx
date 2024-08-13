import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { ISeoProps } from './MetaHead.types'


const MetaHead = (props: ISeoProps) => {
  const { t } = useTranslation();

  const {
    title,
    description = t('meta.description'),
    published,
    updated,
    category,
    tags,
    image = '/images/general/OG.jpg',
    path = '',
  } = props;

  return (
    <>
      <Head>
        <title>{`${t('meta.title')} - ${title}`}</title>
        <meta name="description" content={description}/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

        {/* Article */}
        {published &&
          <meta
            key="article:published_time"
            name="article:published_time"
            content={published}
          />
        }
        {updated &&
          <meta
            key="article:modified_time"
            name="article:modified_time"
            content={updated}
          />
        }
        {category &&
          <meta
            key="article:section"
            name="article:section"
            content={category}
          />
        }
        {tags && tags.length > 0 &&
          <meta
            key="article:tag"
            name="article:tag"
            content={tags.join(', ')}
          />
        }

        {/* Open Graph */}
        <meta property="og:title" content={t('meta.metaTitle')}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={image}/>
        <meta property="og:image:secure_url" content={image}/>
        <meta property="og:image:type" content="image/jpg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:alt" content={t('meta.metaTitle')}/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://"/>
        <meta property="twitter:title" content={t('meta.metaTitle')}/>
        <meta property="twitter:description" content={description}/>
        <meta property="twitter:image" content={image}/>

        {/* Favicon */}
        <link id="favicon" rel="shortcut icon" type="image/ico" href="/images/fav/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/fav/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/fav/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/fav/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/images/fav/android-chrome-192x192.png"/>
        <link rel="icon" type="image/png" sizes="512x512" href="/images/fav/android-chrome-512x512.png"/>
        <link rel="manifest" href="/images/fav/favicon.ico"/>
      </Head>
    </>
  );
};

export default MetaHead;
