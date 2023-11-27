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
  };
  attributes: {
    label: Attribute.String;
    body: Attribute.RichText;
    icon_class: Attribute.String & Attribute.DefaultTo<'icon-star'>;
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
    background_colour: Attribute.Enumeration<['light', 'medium', 'dark']> &
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
    background_colour: Attribute.Enumeration<['light', 'medium', 'dark']> &
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
    background_colour: Attribute.Enumeration<['light', 'medium', 'dark']> &
      Attribute.DefaultTo<'dark'>;
    section_id: Attribute.String;
    title: Attribute.String;
    body: Attribute.RichText;
    subtitle: Attribute.Text;
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
    navigation_card: Attribute.Component<'common.navigation-card', true>;
    background_colour: Attribute.Enumeration<['light', 'medium', 'dark']>;
  };
}

export interface CommonParagraphSectionWithButton extends Schema.Component {
  collectionName: 'components_common_paragraph_section_with_buttons';
  info: {
    displayName: 'Text section with button';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    body: Attribute.RichText;
    cta_button: Attribute.Component<'common.button'>;
    background_colour: Attribute.Enumeration<['light', 'medium', 'dark']> &
      Attribute.DefaultTo<'light'>;
    section_id: Attribute.String;
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
    background_colour: Attribute.Enumeration<['light', 'medium', 'dark']> &
      Attribute.DefaultTo<'light'>;
    section_id: Attribute.String;
  };
}

export interface CommonProgramSection extends Schema.Component {
  collectionName: 'components_common_program_sections';
  info: {
    displayName: 'Program Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    description: Attribute.RichText;
    how_to_apply_title: Attribute.String;
    how_to_apply_description: Attribute.RichText;
    apply_button: Attribute.Component<'common.button'>;
    section_id: Attribute.String;
    icon_class: Attribute.String;
    background_colour: Attribute.Enumeration<['light', 'medium', 'dark']>;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'SEO';
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
    robots_index: Attribute.Boolean;
    robots_follow: Attribute.Boolean;
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
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    body: Attribute.RichText;
    images: Attribute.Media;
    section_id: Attribute.String;
    background_colour: Attribute.Enumeration<['light', 'medium', 'dark']>;
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
      'common.faq-section': CommonFaqSection;
      'common.highlight-section': CommonHighlightSection;
      'common.icon-button': CommonIconButton;
      'common.image-link': CommonImageLink;
      'common.image-slider': CommonImageSlider;
      'common.link': CommonLink;
      'common.navigation-card': CommonNavigationCard;
      'common.page-section-navigation': CommonPageSectionNavigation;
      'common.paragraph-section-with-button': CommonParagraphSectionWithButton;
      'common.paragraph-text-section': CommonParagraphTextSection;
      'common.program-section': CommonProgramSection;
      'common.seo': CommonSeo;
      'common.testimonial': CommonTestimonial;
      'common.text-with-image-lightbox': CommonTextWithImageLightbox;
      'donate.instruction-card': DonateInstructionCard;
      'staff.people': StaffPeople;
    }
  }
}
