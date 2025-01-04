import React from "react";

const CodeDisplay = ({ code }) => {
  const lines = code.split("\n");
  return (
    <div className="w-full">
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center px-4 py-2 bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm text-gray-400">java</span>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            <code>
              {lines.map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-gray-500 w-8 inline-block select-none">
                    {index + 1}
                  </span>
                  <span className="flex-1">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  technologies,
  features = [],
  codeSnippet,
  classStructure = [],
  contributors = [],
  documentation = [],
}) => {
  return (
    <div className="border border-gray-700 rounded-lg shadow-md p-6 max-w-2xl mx-auto mb-8 bg-gray-800">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>

      {contributors.length > 0 && (
        <div className="mb-4">
          <h3 className="font-bold mb-2 text-gray-100">Contributors:</h3>
          <div className="flex flex-wrap gap-2">
            {contributors.map((contributor) => (
              <span
                key={contributor}
                className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {contributor}
              </span>
            ))}
          </div>
        </div>
      )}

      {codeSnippet && (
        <div className="mb-4">
          <CodeDisplay code={codeSnippet} />
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Key Features:</h3>
        <ul className="list-disc list-inside space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Class Structure:</h3>
        <ul className="list-disc list-inside space-y-1">
          {classStructure.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Documentation:</h3>
        <ul className="list-disc list-inside space-y-1">
          {documentation.map((doc, index) => (
            <li key={index} className="text-gray-300">
              {doc}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-2 text-gray-100">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sem3JavaMidTerm = () => {
  const projects = [
    {
      title: "Library Management System",
      description:
        "A comprehensive Java-based library management system featuring item management, patron tracking, and borrowing functionality. The system implements inheritance hierarchies for library items and patrons, along with detailed author management capabilities.",
      technologies: [
        "Java",
        "Object-Oriented Design",
        "Git/GitHub",
        "Scanner Class",
        "Collections Framework",
      ],
      codeSnippet: `// LibraryItem hierarchy implementation
public abstract class LibraryItem {
    protected String id;
    protected String title;
    protected Author author;
    protected String isbn;
    protected String publisher;
    protected int copies;
    
    public LibraryItem(String id, String title, Author author, 
                      String isbn, String publisher, int copies) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publisher = publisher;
        this.copies = copies;
    }
    
    public abstract String getType();
    public abstract boolean isAvailable();
}

public class Book extends LibraryItem {
    private BookFormat format; // PRINTED, ELECTRONIC, AUDIO
    
    public Book(String id, String title, Author author, 
                String isbn, String publisher, int copies, 
                BookFormat format) {
        super(id, title, author, isbn, publisher, copies);
        this.format = format;
    }
    
    @Override
    public String getType() {
        return "Book - " + format.toString();
    }
    
    @Override
    public boolean isAvailable() {
        return copies > 0;
    }
}

// Library management methods
public class Library {
    private List<LibraryItem> items;
    private List<Author> authors;
    private List<Patron> patrons;
    
    public LibraryItem searchByISBN(String isbn) {
        return items.stream()
                   .filter(item -> item.getIsbn().equals(isbn))
                   .findFirst()
                   .orElse(null);
    }
    
    public boolean borrowItem(Patron patron, LibraryItem item) {
        if (item.isAvailable() && patron.canBorrow()) {
            item.copies--;
            patron.addBorrowedItem(item);
            return true;
        }
        return false;
    }
}`,
      features: [
        "Item management for books and periodicals with different formats (printed, electronic, audio)",
        "Author management system with bibliographic details",
        "Patron hierarchy supporting students and employees",
        "Item borrowing and return functionality",
        "Search capabilities by title, author, or ISBN",
        "Interactive console menu system",
        "Availability tracking for all library items",
      ],
      classStructure: [
        "LibraryItem (Abstract): Base class for all library items",
        "Book & Periodical: Inherit from LibraryItem with specific formats",
        "Author: Manages author information and their works",
        "Patron (Abstract): Base class for library members",
        "Student & Employee: Inherit from Patron with specific attributes",
        "Library: Main management class for system operations",
        "Demo: Entry point with menu system implementation",
      ],
      documentation: [
        "User guide with class explanations and diagrams",
        "Development setup and compilation guide",
        "JavaDocs for all classes and methods",
        "Theoretical database design with ERD",
        "Installation and deployment manual",
        "Demo data initialization guide",
        "Video demonstration of functionality",
      ],
      contributors: ["Brian Janes", "Brad Ayers"],
    },
  ];

  return (
    <div className="p-4 bg-gray-900">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Sem3JavaMidTerm;
