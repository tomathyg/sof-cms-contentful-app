import Link from 'next/link'
import { draftMode } from 'next/headers'
import { getScene, getAllScenes } from '../../../lib/api-2'
import Image from 'next/image'

//import WalletConnect from '../../components/WalletConnectButton'

//import { type } from 'os'
import React from 'react';

//import { Markdown } from '../../../lib/markdown'


//import NFTPaperCheckout from '../../components/PaperCheckout'
import CrossmintPayButtonManifold from '../../components/CrossmintPayButtonManifold'
//import CrossmintPayButtonProduction from '../../components/CrossMintPayButtonProduction'
//import CrossmintPayButtonManifoldTest from '../../components/CrossmintPayButtonManifoldTest'

//import NFTData from '../../components/NFTData'
//import ManifoldWidget from '@/app/components/ManifoldWidget';

//import ManifoldProvider from '../../components/ManifoldProvider'
//import ManifoldBuyButton from '../../components/ManifoldBuyButton'

//import Player from '../../components/AudioPlayer'
//import DecentAudioPlayer from '../../components/DecentAudioPLayer'
import H5Player from '../../components/H5AudioPlayer'

import ClientImage from '../../components/ClientImage'

import SubmissionsGallery from '../../components/SubmissionsGallery'
//import SwiperGallery from '../../components/SwiperGalleryWebComponent';
//import YetCarousel from '../../components/YetGallery'
//import LightGallery from '../../components/LightGallery'
//import SwiperReactGallery from '../../components/SwiperReactGallery';
//import YetGallery from '../../components/YetGallery';

//import contentfulLoader from '../../imageLoaders/contentfulLoader'

//import BackgroundImageStyle from '../../components/BackgroundImageStyle';

/*export async function generateStaticParams() {
  const allScenes = await getAllScenes(false);
  return allScenes.map((scene) => ({
    slug: scene.slug,
  }))
}*/

/*function ManifoldListing(id:any) {
  return (
    <div className="ManifoldListing">
      <div
        data-widget="m-listing-attributes"
        data-id={id}
        data-network="NETWORK"
      ></div>
    </div>
  );
}*/

export async function generateStaticParams() {
  const allScenes = await getAllScenes(false)

  const sceneParams = allScenes.map((scene) => ({
    slug: scene.slug,
    //images: scene.submissionsCollection.items
  }));

  //console.log("SCENE PARAMS:", sceneParams);

  return sceneParams;
}


/*export async function generateStaticParams() {
  const scene = await getScene(false)

  return scene.map((scene) => ({
    slug: scene.slug,
  }))
}*/

export default async function ScenePage({
  params,
}: {
  params: { slug: string }
}) {
  const { isEnabled } = draftMode();
  //console.log("SLUG:", params.slug);
  //console.log("GET SCENE:", getScene);
  const scene = await getScene(params.slug, isEnabled);
  console.log("SCENE:", scene);
  const submissions = scene.submissionsCollection.items;
  //console.log("SCENE SUBMISSIONS:", submissions);
  //const imageSlug = submission.id.split('-')[1];
  const artworkSubmission = scene.artworkSubmission;
  const imageBase = '/scenes/' + params.slug + '/gallery/';
  const imageSlug = artworkSubmission.id.split('-')[1];
  const imageSrc = imageBase + imageSlug + '.jpg';

  const gridGallery = true;

  return (
    <>
    <div className="background-image-container">
      <Image
        //loader={contentfulLoader}
        unoptimized={true}
        src={imageSrc + '?w=1080&q=50'}
        alt={`Scene image ${artworkSubmission.id}`} 
        fill={true}
        quality={50}
        className='scene-image mb-2'
      />
    </div>
    <div className="scene-article-container mx-auto h-full">
      <article className={`scene-article ${scene.slug}-article`}>
        
        {artworkSubmission && artworkSubmission.id && (
          <section className="scene-header mb-28 flex flex-col items-center relative">
            <div className="w-full">
              <h1 className="scene-title uppercase font-semibold leading-none text-center">
                {scene.title}
              </h1>
            </div>
            <div className='scene-image-container flex flex-col items-center'>
              <ClientImage
                src={imageSrc}
                name='Scene image'
                className='scene-image mb-2'
              />
              <div className="audio-player-wrapper section-wrapper w-full text-sm">
                <H5Player
                    src={scene.audioMp3.url}
                    title={`${scene.title}: ${scene.audioMp3.title}`}
                    colour={scene.colour.value}
                />
              </div>
              <div className="pay-button-wrapper section-wrapper mt-2 w-full text-sm flex gap-4 text-center items-center xsm:items-end justify-center sm:justify-between flex-col xsm:flex-row">
              {/*<div
                data-widget="m-claim-buy-only"
                data-id="59406576"
                ></div>*/}

                {/*<CrossmintPayButtonManifoldTest />*/}

                {/*<ManifoldBuyButton />*/}
                {/*{scene && scene.manifoldClaimPage && (
                  <div className='manifold-button-container flex justify-center'>
                    <a target="_blank" rel="external" href={scene.manifoldClaimPage} className={`xmint-btn crossmintButton-0-2-1 h-[50px] bg-[${scene.colour.value}]`}>{scene.manifoldBuyButtonText || 'COLLECT SONG'}</a>
                  </div>
                )}*/}

                {/*<WalletConnect></WalletConnect>*/}
                {scene && scene.crossmintProjectIdProduction && scene.crossmintCollectionIdProduction && scene.nftContractAddress && scene.manifoldCoreCreatorContractAddress && scene.manifoldClaimInstanceId && scene.nftPrice && scene.mintFee && (
                  <CrossmintPayButtonManifold
                    projectId={scene.crossmintProjectIdProduction}
                    collectionId={scene.crossmintCollectionIdProduction}
                    creatorContractAddress={scene.nftContractAddress}
                    contractAddress={scene.manifoldCoreCreatorContractAddress}
                    contractType={scene.contractType}
                    instanceId={scene.manifoldClaimInstanceId}
                    nftPrice={scene.nftPrice}
                    mintFee={scene.mintFee}
                    environment='production'
                  />
                )}
                
                {scene.zoraUrl && (
                <div className='manifold-button-container flex justify-center w-full'>
                      <Link target="_blank" rel="external" href={scene.zoraUrl} className={`xmint-btn crossmintButton-0-2-1 h-[50px] bg-[${scene.colour.value}]`}>COLLECT SCENE</Link>
                </div>
                )}
              
              </div>
            </div>
          </section>
        )}

        
          {/*<NFTData
            contractAddress={scene.nftContractAddress}
            contractABI={scene.nftAbi}
            />*/}
          {/*<ManifoldWidget
            id={scene.manifoldClaimInstanceId}
          />*/}
            {/*<ManifoldProvider
              id={scene.manifoldClaimInstanceId}
        />*/}
        

        {/*<section className="page-subheading-container">
          <h2 className="uppercase font-semibold text-4xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight md:leading-none text-center">
            GALLERY
          </h2>
        </section>*/}
        {/*<p>
          {scene.nftContractId}
        </p>*/}
        {/*
        <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
          <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
        </audio>
        */}
        {/*<Player />*/}
        {/*<DecentAudioPlayer />*/}

        {/*{scene.nftContractId && (*/}
          {/*<section className="mb-8 flex justify-center checkout-section">
            <NFTPaperCheckout
              checkoutId={scene.nftContractId}
            />
            <CrossmintPayButtonManifold
              projectId={scene.crossmintProjectIdStaging}
              collectionId={scene.crossmintCollectionIdStaging}
              creatorContractAddress={scene.manifoldCreatorContractAddressTestnet}
              contractAddress={scene.testnetContractAddress}
              instanceId={scene.testnetContractInstanceId}
              environment='staging'
            />
            <CrossmintPayButtonManifold
              projectId={scene.crossmintProjectIdProduction}
              collectionId={scene.crossmintCollectionIdProduction}
              creatorContractAddress={scene.manifoldCreatorContractAddressMainnet}
              contractAddress={scene.mainnetContractAddress}
              instanceId={scene.mainnetContractInstanceId}
              environment='production'
            />
          </section>*/}
        {/*})}*/}

        {/*{scene.audioMp3 && scene.audioMp3.url && scene.audioMp3.title && (
          <section className="audio-player-section mb-8 flex justify-center w-full">
            
          </section>
        )}*/}

        {/*{submissions && submissions.length > 0 && !gridGallery && (
          <section className="scene-gallery-section">
            <SwiperReactGallery
              slug={params.slug}
              submissions={submissions}
              slidesPerViewCount={1}
              zoraUrl={scene.zoraUrl}
            />

          </section>
        )}*/}

        {submissions && submissions.length > 0 && gridGallery && (
          <SubmissionsGallery
            submissions={submissions}
            slug={scene.slug}
            zoraUrl={scene.zoraUrl}
          />
        )}
        
        {/*<YetGallery
          submissions={submissions}
        />*/}

        {/*<SwiperGallery
          submissions={submissions}
        />*/}
        {/*<LightGallery
          submissions={submissions}
        />*/}
      </article>
    </div>
    {/*<BackgroundImageStyle
      url={scene.image.url}
    />*/}
    </>
  )
}
