export type Photo = {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: false;
  current_user_collections: [];
  sponsorship: null;
  topic_submissions: {};
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: null;
    twitter_username: string;
    portfolio_url: null;
    bio: null;
    location: null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: true;
    for_hire: false;
    social: {
      instagram_username: string;
      portfolio_url: null;
      twitter_username: string;
      paypal_email: null;
    };
  };
  tags: [
    {
      type: string;
      title: string;
      source: {
        ancestry: {
          type: {
            slug: string;
            pretty_slug: string;
          };
          category: {
            slug: string;
            pretty_slug: string;
          };
          subcategory: {
            slug: string;
            pretty_slug: string;
          };
        };
        title: string;
        subtitle: string;
        description: string;
        meta_title: string;
        meta_description: string;
        cover_photo: {
          id: string;
          created_at: string;
          updated_at: string;
          promoted_at: string;
          width: number;
          height: number;
          color: string;
          blur_hash: string;
          description: string;
          alt_description: string;
          urls: {
            raw: string;
            full: string;
            regular: string;
            small: string;
            thumb: string;
            small_s3: string;
          };
          links: {
            self: string;
            html: string;
            download: string;
            download_location: string;
          };
          likes: number;
          liked_by_user: false;
          current_user_collections: [];
          sponsorship: null;
          topic_submissions: {};
          premium: false;
          user: {
            id: string;
            updated_at: string;
            username: string;
            name: string;
            first_name: string;
            last_name: string;
            twitter_username: null;
            portfolio_url: null;
            bio: string;
            location: string;
            links: {
              self: string;
              html: string;
              photos: string;
              likes: string;
              portfolio: string;
              following: string;
              followers: string;
            };
            profile_image: {
              small: string;
              medium: string;
              large: string;
            };
            instagram_username: string;
            total_collections: number;
            total_likes: number;
            total_photos: number;
            accepted_tos: true;
            for_hire: true;
            social: {
              instagram_username: string;
              portfolio_url: null;
              twitter_username: null;
              paypal_email: null;
            };
          };
        };
      };
    },
    {
      type: string;
      title: string;
      source: {
        ancestry: {
          type: {
            slug: string;
            pretty_slug: string;
          };
          category: {
            slug: string;
            pretty_slug: string;
          };
        };
        title: string;
        subtitle: string;
        description: string;
        meta_title: string;
        meta_description: string;
        cover_photo: {
          id: string;
          created_at: string;
          updated_at: string;
          promoted_at: string;
          width: number;
          height: number;
          color: string;
          blur_hash: string;
          description: string;
          alt_description: string;
          urls: {
            raw: string;
            full: string;
            regular: string;
            small: string;
            thumb: string;
            small_s3: string;
          };
          links: {
            self: string;
            html: string;
            download: string;
            download_location: string;
          };
          likes: number;
          liked_by_user: false;
          current_user_collections: [];
          sponsorship: null;
          topic_submissions: {
            animals: {
              status: string;
              approved_on: string;
            };
          };
          premium: false;
          user: {
            id: string;
            updated_at: string;
            username: string;
            name: string;
            first_name: string;
            last_name: string;
            twitter_username: null;
            portfolio_url: null;
            bio: null;
            location: null;
            links: {
              self: string;
              html: string;
              photos: string;
              likes: string;
              portfolio: string;
              following: string;
              followers: string;
            };
            profile_image: {
              small: string;
              medium: string;
              large: string;
            };
            instagram_username: null;
            total_collections: number;
            total_likes: number;
            total_photos: number;
            accepted_tos: false;
            for_hire: false;
            social: {
              instagram_username: null;
              portfolio_url: null;
              twitter_username: null;
              paypal_email: null;
            };
          };
        };
      };
    },
    {
      type: string;
      title: string;
      source: {
        ancestry: {
          type: {
            slug: string;
            pretty_slug: string;
          };
          category: {
            slug: string;
            pretty_slug: string;
          };
          subcategory: {
            slug: string;
            pretty_slug: string;
          };
        };
        title: string;
        subtitle: string;
        description: string;
        meta_title: string;
        meta_description: string;
        cover_photo: {
          id: string;
          created_at: string;
          updated_at: string;
          promoted_at: null;
          width: number;
          height: number;
          color: string;
          blur_hash: string;
          description: string;
          alt_description: string;
          urls: {
            raw: string;
            full: string;
            regular: string;
            small: string;
            thumb: string;
            small_s3: string;
          };
          links: {
            self: string;
            html: string;
            download: string;
            download_location: string;
          };
          likes: number;
          liked_by_user: false;
          current_user_collections: [];
          sponsorship: null;
          topic_submissions: {};
          premium: false;
          user: {
            id: string;
            updated_at: string;
            username: string;
            name: string;
            first_name: string;
            last_name: string;
            twitter_username: null;
            portfolio_url: null;
            bio: null;
            location: null;
            links: {
              self: string;
              html: string;
              photos: string;
              likes: string;
              portfolio: string;
              following: string;
              followers: string;
            };
            profile_image: {
              small: string;
              medium: string;
              large: string;
            };
            instagram_username: string;
            total_collections: number;
            total_likes: number;
            total_photos: number;
            accepted_tos: true;
            for_hire: false;
            social: {
              instagram_username: string;
              portfolio_url: null;
              twitter_username: null;
              paypal_email: null;
            };
          };
        };
      };
    }
  ];
};
