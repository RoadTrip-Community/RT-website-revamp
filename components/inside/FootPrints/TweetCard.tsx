interface TweetCardProps {
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  metrics: {
    replies: number;
    retweets: number;
    likes: number;
    views: number;
  };
}

const TweetCard: React.FC<TweetCardProps> = ({
  username,
  handle,
  content,
  timestamp,
  metrics,
}) => {
  return (
    <div className="bg-white p-4 border border-black max-w-[400px]">
      {/* Header */}
      <div className="flex items-center gap-1">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-start flex-col">
            <span className="font-extrabold text-[base] text-black">{username}</span>
            <div className="text-[#5E6E67] text-sm font-medium flex items-center gap-2">
              @{handle}
              <span className="text-[#1E49D7] font-extrabold cursor-pointer">Follow</span>
            </div>
          </div>
          <img src="/x.png" alt="X Logo" className="w-[24px] h-[22px] cursor-pointer" />
        </div>
      </div>

      {/* Content */}
      <div className="mt-3 text-[15px] whitespace-pre-wrap text-black">{content}</div>

      {/* Timestamp */}
      <div className="mt-3 text-gray-500 text-sm border-b border-gray-100 pb-3">
        {timestamp}
      </div>

      {/* Metrics */}
      <div className="flex justify-between mt-3 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" /* Reply icon */ />
          <span>{metrics.replies}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" /* Retweet icon */ />
          <span>{metrics.retweets}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" /* Like icon */ />
          <span>{metrics.likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" /* Analytics icon */ />
          <span>{metrics.views}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" /* Share icon */ />
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
