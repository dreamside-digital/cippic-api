import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonAccordion extends Schema.Component {
  collectionName: 'components_common_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'layer';
  };
  attributes: {
    Header: Attribute.String;
    Body: Attribute.RichText;
  };
}

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
    icon: 'cube';
  };
  attributes: {
    button_text: Attribute.String;
    button_link: Attribute.String;
  };
}

export interface CommonContactCard extends Schema.Component {
  collectionName: 'components_common_contact_cards';
  info: {
    displayName: 'Contact card';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    body: Attribute.RichText;
    icon_class: Attribute.String & Attribute.DefaultTo<'fa-solid fa-star'>;
  };
}

export interface CommonContactOptions extends Schema.Component {
  collectionName: 'components_common_contact_options';
  info: {
    displayName: 'Contact options';
    icon: 'layer';
    description: '';
  };
  attributes: {
    contact_cards: Attribute.Component<'common.contact-card', true>;
    background_colour: Attribute.Enumeration<
      ['light', 'medium', 'dark', 'darkest']
    >;
    section_id: Attribute.String;
    title: Attribute.String;
    subtitle: Attribute.Text;
  };
}

export interface CommonFaqSection extends Schema.Component {
  collectionName: 'components_common_faq_sections';
  info: {
    displayName: 'FAQ section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    FAQs: Attribute.Component<'common.accordion', true>;
    background_colour: Attribute.Enumeration<
      ['light', 'medium', 'dark', 'darkest']
    > &
      Attribute.DefaultTo<'dark'>;
    subtitle: Attribute.RichText;
    section_id: Attribute.String;
  };
}

export interface CommonHighlightSection extends Schema.Component {
  collectionName: 'components_common_highlight_sections';
  info: {
    displayName: 'Highlight section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    body: Attribute.RichText;
    background_colour: Attribute.Enumeration<
      ['light', 'medium', 'dark', 'darkest']
    > &
      Attribute.DefaultTo<'light'>;
    section_id: Attribute.String;
  };
}

export interface CommonIconButton extends Schema.Component {
  collectionName: 'components_common_icon_buttons';
  info: {
    displayName: 'Icon button';
    icon: 'link';
  };
  attributes: {
    link_text: Attribute.String;
    link_path: Attribute.String;
    icon_class: Attribute.String;
  };
}

export interface CommonImageLink extends Schema.Component {
  collectionName: 'components_common_image_links';
  info: {
    displayName: 'Image link';
    icon: 'link';
  };
  attributes: {
    link_path: Attribute.String;
    image: Attribute.Media;
    alt_text: Attribute.String;
    target: Attribute.Enumeration<['same window', 'new window']>;
  };
}

export interface CommonImageSlider extends Schema.Component {
  collectionName: 'components_common_image_sliders';
  info: {
    displayName: 'Image slider section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
    slides_per_view: Attribute.Integer;
    background_colour: Attribute.Enumeration<
      ['light', 'medium', 'dark', 'darkest']
    > &
      Attribute.DefaultTo<'dark'>;
    section_id: Attribute.String;
    title: Attribute.String;
    body: Attribute.RichText;
    subtitle: Attribute.Text;
  };
}

export interface CommonLinkWithIcon extends Schema.Component {
  collectionName: 'components_common_link_with_icons';
  info: {
    displayName: 'Link with icon';
  };
  attributes: {
    link_text: Attribute.String;
    link_path: Attribute.String;
    icon_class: Attribute.String;
  };
}

export interface CommonLink extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    link_text: Attribute.String & Attribute.Required;
    link_path: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['same window', 'new window']> &
      Attribute.DefaultTo<'same window'>;
    icon_class: Attribute.String;
  };
}

export interface CommonNavigationCard extends Schema.Component {
  collectionName: 'components_common_navigation_cards';
  info: {
    displayName: 'Navigation card';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    external_url: Attribute.String;
    section_id: Attribute.String;
    link_text: Attribute.String;
  };
}

export interface CommonPageSectionNavigation extends Schema.Component {
  collectionName: 'components_common_page_section_navigations';
  info: {
    displayName: 'Navigation cards';
    icon: 'layer';
    description: '';
  };
  attributes: {
    navigation_cards: Attribute.Component<'common.navigation-card', true>;
    background_colour: Attribute.Enumeration<
      ['light', 'medium', 'dark', 'darkest']
    >;
  };
}

export interface CommonParagraphTextSection extends Schema.Component {
  collectionName: 'components_common_paragraph_text_sections';
  info: {
    displayName: 'Text section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    body: Attribute.RichText;
    background_colour: Attribute.Enumeration<
      ['light', 'medium', 'dark', 'darkest']
    > &
      Attribute.DefaultTo<'light'>;
    section_id: Attribute.String;
    button: Attribute.Component<'common.button'>;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 155;
      }>;
    share_image: Attribute.Media;
    robots_index: Attribute.Boolean & Attribute.DefaultTo<true>;
    robots_follow: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface CommonTeamSection extends Schema.Component {
  collectionName: 'components_common_team_sections';
  info: {
    displayName: 'Team section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    team_members: Attribute.Component<'staff.people', true>;
    background_colour: Attribute.Enumeration<
      ['light', 'medium', 'dark', 'darkest']
    >;
    section_id: Attribute.String;
  };
}

export interface CommonTestimonial extends Schema.Component {
  collectionName: 'components_common_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    author: Attribute.String;
    date_published: Attribute.Date;
    quote: Attribute.Text;
    author_info: Attribute.String;
  };
}

export interface CommonTextWithImageLightbox extends Schema.Component {
  collectionName: 'components_common_text_with_image_lightboxes';
  info: {
    displayName: 'Text with image lightbox';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    body: Attribute.RichText;
    images: Attribute.Media;
    section_id: Attribute.String;
    background_colour: Attribute.Enumeration<
      ['light', 'medium', 'dark', 'darkest']
    >;
  };
}

export interface DonateInstructionCard extends Schema.Component {
  collectionName: 'components_donate_instruction_cards';
  info: {
    displayName: 'Instruction card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon_class: Attribute.String;
    url: Attribute.String;
    link_text: Attribute.String;
  };
}

export interface QuizChoices extends Schema.Component {
  collectionName: 'components_quiz_choices';
  info: {
    displayName: 'choices';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
    correct: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface QuizMultipleChoice extends Schema.Component {
  collectionName: 'components_quiz_multiple_choices';
  info: {
    displayName: 'multiple choice';
    icon: 'question';
    description: '';
  };
  attributes: {
    question_text: Attribute.Text & Attribute.Required;
    multiple_select: Attribute.Boolean;
    choice: Attribute.Component<'quiz.choices', true>;
    help_text: Attribute.String;
    explanation_text: Attribute.Text;
  };
}

export interface QuizResults extends Schema.Component {
  collectionName: 'components_quiz_results';
  info: {
    displayName: 'results';
    icon: 'information';
    description: '';
  };
  attributes: {
    min_score: Attribute.Integer & Attribute.Required;
    max_score: Attribute.Integer & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    explanation: Attribute.Blocks & Attribute.Required;
  };
}

export interface QuizTrueFalse extends Schema.Component {
  collectionName: 'components_quiz_true_falses';
  info: {
    displayName: 'True or false';
    icon: 'question';
    description: '';
  };
  attributes: {
    question_text: Attribute.Text & Attribute.Required;
    correct: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    help_text: Attribute.String;
    explanation_text: Attribute.Text;
  };
}

export interface StaffPeople extends Schema.Component {
  collectionName: 'components_staff_people';
  info: {
    displayName: 'people';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    bio: Attribute.RichText;
    photo: Attribute.Media;
    website: Attribute.String;
    linkedin: Attribute.String;
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.accordion': CommonAccordion;
      'common.button': CommonButton;
      'common.contact-card': CommonContactCard;
      'common.contact-options': CommonContactOptions;
      'common.faq-section': CommonFaqSection;
      'common.highlight-section': CommonHighlightSection;
      'common.icon-button': CommonIconButton;
      'common.image-link': CommonImageLink;
      'common.image-slider': CommonImageSlider;
      'common.link-with-icon': CommonLinkWithIcon;
      'common.link': CommonLink;
      'common.navigation-card': CommonNavigationCard;
      'common.page-section-navigation': CommonPageSectionNavigation;
      'common.paragraph-text-section': CommonParagraphTextSection;
      'common.seo': CommonSeo;
      'common.team-section': CommonTeamSection;
      'common.testimonial': CommonTestimonial;
      'common.text-with-image-lightbox': CommonTextWithImageLightbox;
      'donate.instruction-card': DonateInstructionCard;
      'quiz.choices': QuizChoices;
      'quiz.multiple-choice': QuizMultipleChoice;
      'quiz.results': QuizResults;
      'quiz.true-false': QuizTrueFalse;
      'staff.people': StaffPeople;
    }
  }
}
