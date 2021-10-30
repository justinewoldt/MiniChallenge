import Tweet from "../components/tweet";
import "./styles.css";

export default function App() {
  const tweets = [
    <Tweet
      imgSource="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SDKTYGJZKRPD7DKBJVBH73QNYI.jpg"
      imgAlt="Lady Gaga in a large pink dress"
      tweetText="No sleep, bus, club, another club, another club, another club, plane, next place, no sleep, another club, another club…"
      profileName="Lady Gaga"
      username="@ladygaga"
      date="31 May 2017"
      isVerified={true}
    />,
    <Tweet
      imgSource="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SDKTYGJZKRPD7DKBJVBH73QNYI.jpg"
      imgAlt="Joseph smith in a pink dress"
      tweetText="Why am I the way I am"
      profileName="Joseph Smith"
      username="@jsmith"
      date="31 May 2018"
      isVerified={false}
    />,
    <Tweet
      imgSource="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SDKTYGJZKRPD7DKBJVBH73QNYI.jpg"
      imgAlt="Joseph Smith in a pink dress"
      tweetText="IM FAMOUS!"
      profileName="Joseph Smith"
      username="@jsmith"
      date="10 October 2019"
      isVerified={true}
    />
  ];
  return tweets;
}
