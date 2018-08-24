import * as examples from '../../assets/examples'

export default [
  {
    id: 'widths',
    title: 'Use no more than 2 different content widths',
    description: 'Too many different container widths on one page can lead to a page lacking a visual structure and feeling rushed and incomplete.',
    category: 'alignment',
    checked: false,
    examples: {
      yes: examples.widthsYes,
      no: examples.widthsNo
    }
  },
  {
    id: 'leftCopy',
    title: 'Ensure all body copy is left aligned',
    description: 'Although center aligning titles and subtitles can look good when done correctly, center aligned body copy is not very legible and makes subsequent sections seem out of alignment.',
    category: 'alignment',
    checked: false,
    examples: {
      yes: examples.leftAlignYes,
      no: examples.leftAlignNo
    }
  },
  {
    id: 'textAlign',
    title: 'Don’t use two different text alignments within the same section',
    description: 'Even if the widths of the containers are the same, changing text alignment within the same section can make the widths on those text sections feel inconsistent, making the site feel unbalanced.',
    category: 'alignment',
    checked: false,
    examples: {
      yes: examples.textAlignYes,
      no: examples.textAlignNo
    }
  },
  {
    id: 'symmetricalPadding',
    title: 'Top and bottom padding are equal sizes',
    description: 'White space is good, inconsistent white space is not, when a section has too much or too little space on the top or the bottom, the section feels lopsided.',
    category: 'symmetry',
    checked: false,
    examples: {
      yes: examples.symmetricalPaddingYes,
      no: examples.symmetricalPaddingNo
    }
  },
  {
    id: 'columnLength',
    title: 'Ensure content in columns are all similar length',
    description: 'Inconsistent column lengths are a really easy way to throw off the symmetry of a site. You will never be able to get this correct on all devices and screen sizes, but do your best to provide copy of equal length',
    category: 'symmetry',
    checked: false,
    examples: {
      yes: examples.columnLengthYes,
      no: examples.columnLengthNo
    }
  },
  {
    id: 'whiteSpace',
    title: 'Avoid unnecessary empty space to the left or right of body copy',
    description: 'This will usually be the result of not enough text in a container that is too wide. A nice alternative would be to break the content into text/image columns.',
    category: 'symmetry',
    checked: false,
    examples: {
      yes: examples.emptySpaceYes,
      no: examples.emptySpaceNo
    }
  },
  {
    id: 'clearCTA',
    title: 'Have a clear Call to Action',
    description: 'If your hero is littered with too many big buttons and flashy content, the most important elements in there will start to get lost. Decide which message is the most important.',
    category: 'hierarchy',
    checked: false,
    examples: {
      yes: examples.clearCTAYes,
      no: examples.clearCTANo
    }
  },
  {
    id: 'basicHierarchy',
    title: 'The biggest or most colorful things are the most important',
    description: 'Ensure the most eye catching sections are actually where you want people to look. An important title or statistic should look like an important title or statistic. Some easy ways to convey importance are changing color or font size.',
    category: 'hierarchy',
    checked: false,
    examples: {
      yes: examples.basicHierarchyYes,
      no: examples.basicHierarchyNo
    }
  },
  {
    id: 'consistentPadding',
    title: 'Spacing between sections is consistent (exluding the hero)',
    description: 'Not every site looks good with massive amounts of white space, but every site looks good when each element is spaced out evenly. With everything consistent we begin to feel familiar with the rhythm and know exactly where to look for the next peice of content.',
    category: 'rhythm',
    checked: false,
    examples: {
      yes: examples.consistentPaddingYes,
      no: examples.consistentPaddingNo
    }
  },
  {
    id: 'notEnoughPadding',
    title: 'Every section is individually padded with sufficient white space',
    description: 'Nothing disrupts rhythm more than not having enough spacing around and between content. Sections without sufficient white space start to blend in to each other making it harder to differenciate key elements.',
    category: 'rhythm',
    checked: false,
    examples: {
      yes: examples.notEnoughPaddingYes,
      no: examples.notEnoughPaddingNo
    }
  },
  {
    id: 'clearSections',
    title: 'Consecutive sections alternate in some way',
    description: 'Alternating the background color or layout of repeating sections is a good way to subtly break the rhythm of the page, and make the new section appear more hierarchical.',
    category: 'rhythm',
    checked: false,
    examples: {
      yes: examples.clearSectionsYes,
      no: examples.clearSectionsNo
    }
  },
  {
    id: 'halfPadding',
    title: 'Two consecutive slices with the same background have half the padding between them',
    description: 'Keeping every section\'s spacing consistent is important, but sometimes keeping it visually consistent is more important than actual consistency. If two sections with the same background have the same padding between them, the space looks twice as big.',
    category: 'rhythm',
    checked: false,
    examples: {
      yes: examples.halfPaddingYes,
      no: examples.halfPaddingNo
    }
  },
  {
    id: 'bodyCopyWidth',
    title: 'Body copy should only ever be in a narrow container',
    description: 'When paragraphs get too wide, they’re harder to read because there’s less whitespace. Whitespace gives paragraphs shape, which acts like visual bearings, making it easier to find your place.',
    category: 'misc',
    checked: false,
    examples: {
      yes: examples.bodyCopyWidthYes,
      no: examples.bodyCopyWidthNo
    }
  },
  {
    id: 'colorContrast',
    title: 'All text passes at least WCAG AA color contrast standards.',
    description: 'All text should be in a color that sufficiently contrasts with the background color, and passes the industry standard accessibility guidelines (WCAG standards). Test your colors with the tool below.',
    category: 'misc',
    checked: false,
    component: 'ContrastChecker'
  },
  {
    id: '306010',
    title: 'Color usage is influenced by the 60, 30, 10 rule',
    description: 'You should not use equal amounts of the primary, secondary and tertiary colors. An old designer\'s rule is to divide the colors into percentages of 60, 30, and 10. A good example of this distribution of color is a business suit: 60% of the outfit is made up of the slacks and jacket. The shirt represents 30%, and the tie 10%.',
    category: 'misc',
    checked: false,
    examples: {
      yes: examples.sixtyThirtyTenYes,
      no: examples.sixtyThirtyTenNo
    }
  },
  {
    id: 'sansSerif',
    title: 'All body copy should be set in a sans serif typeface',
    description: 'In typography, a serif is a small line attached to the end of a stroke in a letter or symbol. A typeface with serifs is called a serif typeface. Sans serif typefaces tend to be easier to read on the web.',
    category: 'misc',
    checked: false,
    examples: {
      yes: examples.sansSerifYes,
      no: examples.sansSerifNo
    }
  }
]
